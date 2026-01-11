import { create } from 'zustand';
import { Exercise, exercises } from '@/data/exercises';

interface ExerciseStore {
    activeExercise: Exercise | null;
    isPlaying: boolean;
    currentStepIndex: number;
    highlightedMuscles: string[]; // For future detailed muscle highlighting

    // Actions
    setActiveExercise: (exerciseId: string) => void;
    togglePlay: () => void;
    setIsPlaying: (playing: boolean) => void;
    setStep: (index: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
}

export const useExerciseStore = create<ExerciseStore>((set, get) => ({
    activeExercise: exercises[0], // Default to first exercise
    isPlaying: true, // Auto-play by default on load
    currentStepIndex: 0,
    highlightedMuscles: [],

    setActiveExercise: (exerciseId) => {
        const exercise = exercises.find(e => e.id === exerciseId) || null;
        set({
            activeExercise: exercise,
            currentStepIndex: 0,
            isPlaying: true
        });
    },

    togglePlay: () => set(state => ({ isPlaying: !state.isPlaying })),

    setIsPlaying: (playing) => set({ isPlaying: playing }),

    setStep: (index) => {
        const { activeExercise } = get();
        if (activeExercise && index >= 0 && index < activeExercise.steps.length) {
            set({ currentStepIndex: index });
        }
    },

    nextStep: () => {
        const { activeExercise, currentStepIndex } = get();
        if (activeExercise && currentStepIndex < activeExercise.steps.length - 1) {
            set({ currentStepIndex: currentStepIndex + 1 });
        }
    },

    prevStep: () => {
        const { currentStepIndex } = get();
        if (currentStepIndex > 0) {
            set({ currentStepIndex: currentStepIndex - 1 });
        }
    },

    reset: () => set({ currentStepIndex: 0, isPlaying: true })
}));
