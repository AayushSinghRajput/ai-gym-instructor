'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import 3D components to avoid SSR issues
const CanvasWrapper = dynamic(() => import('../3d/CanvasWrapper'), { ssr: false });
const HumanModel = dynamic(() => import('../3d/HumanModel'), { ssr: false });

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            {/* Text Content */}
            <div className="flex-1 w-full max-w-2xl py-12 lg:py-0 z-10">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        AI-Powered Form Correction
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Master Your Form with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">3D Guidance</span>
                    </h1>

                    <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                        The first interactive 3D gym tutor. Visualize correct muscle engagement, tempo, and technique for every exercise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/exercises"
                            className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Start Training
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            How it Works
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3D Visual */}
            <div className="flex-1 w-full h-[50vh] lg:h-[80vh] relative z-0">
                <div className="w-full h-full absolute inset-0 bg-transparent">
                    <CanvasWrapper cameraPosition={[0, 1.5, 4]}>
                        <Suspense fallback={null}>
                            <HumanModel />
                        </Suspense>
                    </CanvasWrapper>
                </div>

                {/* Decorative elements around 3D view */}
                <div className="absolute bottom-10 right-0 lg:-right-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-[200px] hidden md:block">
                    <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Current Muscle</div>
                    <div className="text-lg font-bold text-secondary">Full Body</div>
                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-secondary" />
                    </div>
                </div>
            </div>
        </section>
    );
}
