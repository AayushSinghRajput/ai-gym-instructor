export type MuscleGroup = 'Legs' | 'Chest' | 'Back' | 'Shoulders' | 'Arms' | 'Core' | 'Full Body';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ExerciseStep {
  id: number;
  text: string;
  cameraPosition: [number, number, number]; // [x, y, z] relative to target
  animationTime: number; // 0-1 normalized time in the animation loop
  focusMuscles: MuscleGroup[];
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  difficulty: Difficulty;
  description: string;
  videoUrl?: string; // Fallback or reference
  steps: ExerciseStep[];
  commonMistakes: string[];
  duration: number; // in seconds, estimated
  calories: number; // estimated per minute
}

export const exercises: Exercise[] = [
  {
    id: 'squat',
    name: 'Bodyweight Squat',
    muscleGroup: 'Legs',
    difficulty: 'Beginner',
    description: 'A fundamental lower body exercise that targets the quads, hamstrings, and glutes.',
    steps: [
      {
        id: 1,
        text: 'Stand with feet slightly wider than shoulder-width apart.',
        cameraPosition: [0, 1.5, 4],
        animationTime: 0.1,
        focusMuscles: ['Legs', 'Core']
      },
      {
        id: 2,
        text: 'Lower your hips back and down as if sitting in a chair. Keep chest up.',
        cameraPosition: [3, 1, 3],
        animationTime: 0.5,
        focusMuscles: ['Legs']
      },
      {
        id: 3,
        text: 'Lower until thighs are at least parallel to the floor.',
        cameraPosition: [0, 0.5, 3],
        animationTime: 0.6,
        focusMuscles: ['Legs']
      },
      {
        id: 4,
        text: 'Push through your heels to return to the starting position.',
        cameraPosition: [0, 1.5, 4],
        animationTime: 0.9,
        focusMuscles: ['Legs', 'Core']
      }
    ],
    commonMistakes: [
      'Knees caving inward',
      'Heels lifting off the ground',
      'Rounding the lower back'
    ],
    duration: 5,
    calories: 8
  },
  {
    id: 'pushup',
    name: 'Standard Push-up',
    muscleGroup: 'Chest',
    difficulty: 'Beginner',
    description: 'A classic upper body exercise for chest, shoulders, and triceps.',
    steps: [
      {
        id: 1,
        text: 'Start in a plank position with hands slightly wider than shoulders.',
        cameraPosition: [0, 1, 3],
        animationTime: 0.1,
        focusMuscles: ['Chest', 'Core']
      },
      {
        id: 2,
        text: 'Lower your body until your chest nearly touches the floor.',
        cameraPosition: [2, 0.5, 2],
        animationTime: 0.5,
        focusMuscles: ['Chest', 'Arms']
      },
      {
        id: 3,
        text: 'Push back up to the starting position, keeping your body in a straight line.',
        cameraPosition: [0, 1, 3],
        animationTime: 0.9,
        focusMuscles: ['Chest', 'Arms']
      }
    ],
    commonMistakes: [
      'Sagging hips',
      'Elbows flaring out too wide',
      'Incomplete range of motion'
    ],
    duration: 3,
    calories: 9
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    muscleGroup: 'Back',
    difficulty: 'Intermediate',
    description: 'A compound movement that builds total body strength, focusing on the posterior chain.',
    steps: [
      {
        id: 1,
        text: 'Stand with feet hip-width apart, barbell over mid-foot.',
        cameraPosition: [0, 1, 4],
        animationTime: 0.0,
        focusMuscles: ['Legs']
      },
      {
        id: 2,
        text: 'Hinge at hips to grip the bar. Keep back flat.',
        cameraPosition: [3, 1, 0],
        animationTime: 0.3,
        focusMuscles: ['Back', 'Legs']
      },
      {
        id: 3,
        text: 'Lift the bar by extending hips and knees. Keep bar close to legs.',
        cameraPosition: [0, 1.5, 3],
        animationTime: 0.6,
        focusMuscles: ['Back', 'Legs', 'Core']
      },
      {
        id: 4,
        text: 'Stand tall at the top, then control the descent.',
        cameraPosition: [0, 1.5, 4],
        animationTime: 1.0,
        focusMuscles: ['Back', 'Legs']
      }
    ],
    commonMistakes: [
      'Rounding the back',
      'Bar drifting away from the body',
      'Jerking the weight'
    ],
    duration: 6,
    calories: 12
  }
];
