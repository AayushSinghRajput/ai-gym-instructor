'use client';

import { useEffect, Suspense, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Play, Pause, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { exercises } from '@/data/exercises';
import { useExerciseStore } from '@/lib/store';
import { clsx } from 'clsx';

const CanvasWrapper = dynamic(() => import('@/components/3d/CanvasWrapper'), { ssr: false });
const HumanModel = dynamic(() => import('@/components/3d/HumanModel'), { ssr: false });

export default function ExerciseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params);

    const exercise = exercises.find(e => e.id === id);
    const {
        activeExercise, setActiveExercise,
        currentStepIndex, setStep, nextStep, prevStep,
        isPlaying, togglePlay
    } = useExerciseStore();

    useEffect(() => {
        if (exercise) {
            setActiveExercise(exercise.id);
        }
    }, [exercise, setActiveExercise]);

    if (!exercise) {
        notFound();
    }

    const currentStep = exercise.steps[currentStepIndex];

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] overflow-hidden">
            {/* 3D View Area */}
            <div className="flex-1 relative bg-gradient-to-b from-zinc-900 to-black h-[50vh] lg:h-auto">
                <div className="absolute top-4 left-4 z-10">
                    <Link
                        href="/exercises"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Library
                    </Link>
                </div>

                <div className="w-full h-full">
                    <CanvasWrapper
                        cameraPosition={currentStep?.cameraPosition as [number, number, number] || [0, 1.5, 4]}
                    >
                        <Suspense fallback={null}>
                            <HumanModel />
                        </Suspense>
                    </CanvasWrapper>
                </div>

                {/* 3D Controls Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 z-10">
                    <button
                        onClick={prevStep}
                        disabled={currentStepIndex === 0}
                        className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={togglePlay}
                        className="p-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                    >
                        {isPlaying ? <Pause className="w-6 h-6" fill="currentColor" /> : <Play className="w-6 h-6" fill="currentColor" />}
                    </button>

                    <button
                        onClick={nextStep}
                        disabled={currentStepIndex === exercise.steps.length - 1}
                        className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-[450px] bg-zinc-950 border-l border-white/5 flex flex-col h-[50vh] lg:h-auto overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-zinc-900/50">
                    <h1 className="text-3xl font-bold text-white mb-2">{exercise.name}</h1>
                    <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-zinc-300">
                            {exercise.muscleGroup}
                        </span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                            {exercise.difficulty}
                        </span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Progress Steps */}
                    <div>
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Steps</h3>
                        <div className="space-y-4">
                            {exercise.steps.map((step, idx) => (
                                <button
                                    key={step.id}
                                    onClick={() => setStep(idx)}
                                    className={clsx(
                                        "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group",
                                        currentStepIndex === idx
                                            ? "bg-primary/10 border-primary shadow-[0_0_15px_-5px_var(--primary)]"
                                            : "bg-zinc-900/30 border-white/5 hover:border-white/10 hover:bg-zinc-900/50"
                                    )}
                                >
                                    {currentStepIndex === idx && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                                    )}
                                    <div className="flex gap-4">
                                        <span className={clsx(
                                            "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                            currentStepIndex === idx ? "bg-primary text-white" : "bg-white/10 text-zinc-500"
                                        )}>
                                            {step.id}
                                        </span>
                                        <p className={clsx(
                                            "text-sm leading-relaxed",
                                            currentStepIndex === idx ? "text-white" : "text-zinc-400"
                                        )}>
                                            {step.text}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Common Mistakes */}
                    <div>
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Common Mistakes</h3>
                        <div className="space-y-3">
                            {exercise.commonMistakes.map((mistake, i) => (
                                <div key={i} className="flex gap-3 text-sm text-zinc-400 items-start p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>{mistake}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
