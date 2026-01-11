'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

interface CanvasWrapperProps {
    children: React.ReactNode;
    cameraPosition?: [number, number, number];
    className?: string;
}

export default function CanvasWrapper({
    children,
    cameraPosition = [0, 1.5, 4],
    className = "w-full h-full min-h-[400px]"
}: CanvasWrapperProps) {
    // Ensure we only render Canvas on client to prevent hydration errors and context loss
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={className} />;
    }

    return (
        <div className={className}>
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={cameraPosition} />
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 1.5} // Prevent going below ground
                    minDistance={2}
                    maxDistance={10}
                />

                {/* Scenario Lighting */}
                <ambientLight intensity={0.7} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1.2}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <Environment preset="city" />

                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </Canvas>
        </div>
    );
}
