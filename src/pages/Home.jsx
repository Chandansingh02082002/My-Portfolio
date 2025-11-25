import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
const Island = React.lazy(() => import('../models/Island'));
const Sky = React.lazy(() => import('../models/Sky'));
const Bird = React.lazy(() => import('../models/Bird'));
const Plane = React.lazy(() => import('../models/Plane'));
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle Mobile Resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Music control
  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  // Island adjustments
  const adjustIslandForScreenSize = (width) => {
    if (width < 768) {
      return {
        scale: [0.75, 0.75, 0.75],
        position: [0, -4.5, -16],
        rotation: [0.1, 4.7, 0]
      };
    }
    return {
      scale: [1, 1, 1],
      position: [0, -6.5, -43],
      rotation: [0.1, 4.7, 0]
    };
  };

  // Plane adjustments
  const adjustPlaneForScreenSize = (width) => {
    if (width < 768) {
      return {
        scale: [1.2, 1.2, 1.2],
        position: [0, -1.5, -8],
        rotation: [0, 15, 0]
      };
    }
    return {
      scale: [3, 3, 3],
      position: [0, -4, -4],
      rotation: [0, 20, 0]
    };
  };

  const islandProps = adjustIslandForScreenSize(windowWidth);
  const planeProps = adjustPlaneForScreenSize(windowWidth);

  return (
    <section className="w-full h-screen relative">
      
      {/* Popup Content */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.2 }}
        gl={{ antialias: true, preserveDrawingBuffer: false }}
        camera={{
          position: [0, 2, 10],
          fov: windowWidth < 768 ? 55 : 45,
          near: 0.1,
          far: 1000
        }}
        className={`w-full h-screen transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onPointerDown={() => setIsRotating(true)}
        onPointerUp={() => setIsRotating(false)}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird scale={windowWidth < 768 ? 0.6 : 1} />

          <Sky 
            isRotating={isRotating}
            scale={windowWidth < 768 ? 1.2 : 1}
          />

          <Island
            scale={islandProps.scale}
            position={islandProps.position}
            rotation={islandProps.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            scale={planeProps.scale}
            position={planeProps.position}
            rotation={planeProps.rotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>

      {/* Music Button */}
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
