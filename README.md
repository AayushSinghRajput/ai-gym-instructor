# AI Gym Instructor 🏋️‍♂️🤖

An interactive, AI-powered 3D gym tutor that helps you master exercise form, tempo, and technique. This application visualizes exercises using real-time 3D models, providing step-by-step guidance to ensure safe and effective workouts.

![Project Banner](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop) _Note: Replace with actual project screenshot_

## ✨ Features

- **Interactive 3D Visualizations**: View exercises from multiple angles with a 3D human model to fully understand the movement.
- **Step-by-Step Guidance**: Detailed breakdown of each exercise phase with camera focusing on key muscle groups.
- **Real-time Form Correction**: Highlights focus muscles and warns about common mistakes.
- **Exercise Library**: Includes fundamental movements like Bodyweight Squats, Push-ups, and Deadlifts.
- **Smart Metrics**: Tracks difficulty levels, estimated duration, and calorie burn for each exercise.
- **Responsive Design**: precise control on desktop and mobile.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D Rendering**:
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
  - [Drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-gym-instructor.git
   cd ai-gym-instructor
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── exercises/       # Exercise listing and details pages
│   └── page.tsx         # Landing page
├── components/          # React components
│   ├── 3d/              # Three.js/R3F components (HumanModel, CanvasWrapper)
│   └── ui/              # UI components (Hero, buttons, etc.)
├── data/                # Static data (exercises list, muscle groups)
└── lib/                 # Utilities and stores (Zustand store)
```

## 🎮 Controls

- **Play/Pause**: Toggle the exercise animation.
- **Next/Prev Step**: Move through the exercise steps manually.
- **Camera**: The camera automatically moves to the best angle for each step.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for detail.
