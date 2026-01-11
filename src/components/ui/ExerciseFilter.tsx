'use client';

import { MuscleGroup, Difficulty } from '@/data/exercises';
import { clsx } from 'clsx';

interface ExerciseFilterProps {
    selectedMuscle: MuscleGroup | 'All';
    selectedDifficulty: Difficulty | 'All';
    onMuscleChange: (muscle: MuscleGroup | 'All') => void;
    onDifficultyChange: (difficulty: Difficulty | 'All') => void;
}

const muscles: (MuscleGroup | 'All')[] = ['All', 'Full Body', 'Legs', 'Chest', 'Back', 'Shoulders', 'Arms', 'Core'];
const difficulties: (Difficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function ExerciseFilter({
    selectedMuscle,
    selectedDifficulty,
    onMuscleChange,
    onDifficultyChange
}: ExerciseFilterProps) {
    return (
        <div className="flex flex-col gap-6 mb-8">
            <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Muscle Group</label>
                <div className="flex flex-wrap gap-2">
                    {muscles.map((muscle) => (
                        <button
                            key={muscle}
                            onClick={() => onMuscleChange(muscle)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                selectedMuscle === muscle
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {muscle}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Difficulty</label>
                <div className="flex flex-wrap gap-2">
                    {difficulties.map((level) => (
                        <button
                            key={level}
                            onClick={() => onDifficultyChange(level)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                selectedDifficulty === level
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
