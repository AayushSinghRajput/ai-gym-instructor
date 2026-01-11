'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, MathUtils } from 'three';
import { useExerciseStore } from '@/lib/store';

export default function HumanModel() {
    // Refs for body parts to animate
    const group = useRef<Group>(null);
    const torsoRef = useRef<Group>(null);
    const leftLegRef = useRef<Group>(null);
    const rightLegRef = useRef<Group>(null);
    const leftArmRef = useRef<Group>(null);
    const rightArmRef = useRef<Group>(null);

    const { activeExercise, isPlaying } = useExerciseStore();

    // Material reuse
    const skinColor = "#d1d5db"; // Light grey
    const clothesColor = "#374151"; // Dark grey
    const accentColor = "#4b5563"; // Mid grey

    useFrame((state) => {
        if (!group.current || !activeExercise || !isPlaying) return;

        const t = state.clock.elapsedTime * 2; // Animation speed

        if (activeExercise.id === 'squat') {
            // Squat Animation
            const squatCycle = (Math.sin(t) + 1) / 2; // 0 to 1
            const depth = 0.5;

            // Body position (up and down)
            group.current.position.y = -0.05 - (squatCycle * depth);

            // Lean forward slightly
            if (torsoRef.current) torsoRef.current.rotation.x = squatCycle * 0.3;

            // Legs rotation (simplified)
            if (leftLegRef.current) leftLegRef.current.rotation.x = -squatCycle * 0.5;
            if (rightLegRef.current) rightLegRef.current.rotation.x = -squatCycle * 0.5;

            // Arms counter-balance
            if (leftArmRef.current) leftArmRef.current.rotation.x = squatCycle * 1.0;
            if (rightArmRef.current) rightArmRef.current.rotation.x = squatCycle * 1.0;

            // Reset unused rotations
            group.current.rotation.x = 0;

        } else if (activeExercise.id === 'pushup') {
            // Pushup Animation
            const pushupCycle = (Math.sin(t) + 1) / 2;

            // Orient horizontal
            group.current.rotation.x = -Math.PI / 2;
            group.current.position.y = 0.2 + (pushupCycle * 0.4); // Up and down off floor

            // Arms bending (visualized by rotation/position)
            if (leftArmRef.current) leftArmRef.current.position.y = 1.3 - (pushupCycle * 0.2);
            if (rightArmRef.current) rightArmRef.current.position.y = 1.3 - (pushupCycle * 0.2);

        } else if (activeExercise.id === 'deadlift') {
            // Deadlift Animation
            const liftCycle = (Math.sin(t) + 1) / 2;

            // Hinge at hips
            if (torsoRef.current) torsoRef.current.rotation.x = (1 - liftCycle) * 1.5; // Bend forward

            // Arms follow gravity (roughly)
            if (leftArmRef.current) leftArmRef.current.rotation.x = -(1 - liftCycle) * 1.0;
            if (rightArmRef.current) rightArmRef.current.rotation.x = -(1 - liftCycle) * 1.0;

            group.current.rotation.x = 0;
            group.current.position.y = -0.05;
        } else {
            // Idle
            const idle = Math.sin(t * 0.5) * 0.05;
            if (torsoRef.current) torsoRef.current.position.y = idle;
            group.current.rotation.x = 0;
            group.current.position.y = -0.05;
        }
    });

    return (
        <group ref={group} position={[0, -0.05, 0]}>
            {/* Ground platform */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[2, 32]} />
                <meshStandardMaterial color="#1f2937" />
            </mesh>

            {/* Pivot for Legs */}
            <group position={[0, 0, 0]}>
                <group ref={leftLegRef} position={[-0.1, 0.8, 0]}>
                    {/* Pivot point is top of leg */}
                    <mesh position={[0, -0.4, 0]} castShadow>
                        <capsuleGeometry args={[0.07, 0.8]} />
                        <meshStandardMaterial color={clothesColor} />
                    </mesh>
                </group>
                <group ref={rightLegRef} position={[0.1, 0.8, 0]}>
                    <mesh position={[0, -0.4, 0]} castShadow>
                        <capsuleGeometry args={[0.07, 0.8]} />
                        <meshStandardMaterial color={clothesColor} />
                    </mesh>
                </group>
            </group>

            {/* Torso Group (Pivots at hips) */}
            <group ref={torsoRef} position={[0, 0.8, 0]}>
                {/* Body */}
                <mesh position={[0, 0.35, 0]} castShadow>
                    <boxGeometry args={[0.28, 0.7, 0.15]} />
                    <meshStandardMaterial color={accentColor} />
                </mesh>

                {/* Head */}
                <mesh position={[0, 0.85, 0]} castShadow>
                    <sphereGeometry args={[0.12]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>

                {/* Arms */}
                <group ref={leftArmRef} position={[-0.2, 0.6, 0]}>
                    <mesh position={[0, -0.3, 0]} castShadow>
                        <capsuleGeometry args={[0.05, 0.6]} />
                        <meshStandardMaterial color={skinColor} />
                    </mesh>
                </group>
                <group ref={rightArmRef} position={[0.2, 0.6, 0]}>
                    <mesh position={[0, -0.3, 0]} castShadow>
                        <capsuleGeometry args={[0.05, 0.6]} />
                        <meshStandardMaterial color={skinColor} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}
