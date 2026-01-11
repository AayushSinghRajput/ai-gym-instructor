'use client';

import { useState } from 'react';
import { exercises, MuscleGroup, Difficulty } from '@/data/exercises';
import ExerciseCard from '@/components/ui/ExerciseCard';
import ExerciseFilter from '@/components/ui/ExerciseFilter';

export default function ExercisesPage() {
    const [muscleFilter, setMuscleFilter] = useState<MuscleGroup | 'All'>('All');
    const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'All'>('All');

    const filteredExercises = exercises.filter(ex => {
        const muscleMatch = muscleFilter === 'All' || ex.muscleGroup === muscleFilter;
        const difficultyMatch = difficultyFilter === 'All' || ex.difficulty === difficultyFilter;
        return muscleMatch && difficultyMatch;
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Exercise Library</h1>
                <p className="text-zinc-400 max-w-2xl">
                    Browse our comprehensive collection of exercises. Filter by muscle group or difficulty to find the perfect movement for your workout.
                </p>
            </div>

            <ExerciseFilter
                selectedMuscle={muscleFilter}
                selectedDifficulty={difficultyFilter}
                onMuscleChange={setMuscleFilter}
                onDifficultyChange={setDifficultyFilter}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>

            {filteredExercises.length === 0 && (
                <div className="text-center py-20 text-zinc-500">
                    No exercises found matching your criteria.
                </div>
            )}
        </div>
    );
}
