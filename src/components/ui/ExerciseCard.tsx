import Link from 'next/link';
import { ArrowRight, Activity, Flame } from 'lucide-react';
import { Exercise } from '@/data/exercises';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ExerciseCardProps {
    exercise: Exercise;
    className?: string;
}

export default function ExerciseCard({ exercise, className }: ExerciseCardProps) {
    return (
        <Link
            href={`/exercises/${exercise.id}`}
            className={twMerge(
                "group relative flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 transition-all hover:bg-zinc-900/80 overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between mb-4 z-10">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                    {exercise.muscleGroup}
                </div>
                <div className={clsx(
                    "px-3 py-1 rounded-full text-xs font-medium border",
                    exercise.difficulty === 'Beginner' && "border-green-500/20 text-green-400 bg-green-500/10",
                    exercise.difficulty === 'Intermediate' && "border-yellow-500/20 text-yellow-400 bg-yellow-500/10",
                    exercise.difficulty === 'Advanced' && "border-red-500/20 text-red-400 bg-red-500/10",
                )}>
                    {exercise.difficulty}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 z-10 group-hover:text-primary transition-colors">
                {exercise.name}
            </h3>

            <p className="text-zinc-400 text-sm mb-6 line-clamp-2 z-10">
                {exercise.description}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm z-10">
                <div className="flex items-center gap-4 text-zinc-500">
                    <div className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        <span>{exercise.duration} mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        <span>{exercise.calories} cal</span>
                    </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
