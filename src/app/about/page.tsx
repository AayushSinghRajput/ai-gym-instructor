import { ShieldCheck, Brain, Activity } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why AI Gym Tutor?</h1>
                <p className="text-xl text-zinc-400">
                    Bridging the gap between professional coaching and self-learning with immersive 3D technology.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Prevent Injury</h3>
                    <p className="text-zinc-400">
                        Improper form is the #1 cause of gym injuries. Our 3D visualization helps you understand safe mechanics before you lift.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                        <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Learn Faster</h3>
                    <p className="text-zinc-400">
                        Interactive 3D models provide intuitive understanding of movement patterns that videos often miss.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-500">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Maximize Gains</h3>
                    <p className="text-zinc-400">
                        Target the right muscles effectively. Better form means better muscle activation and faster progress.
                    </p>
                </div>
            </div>
        </div>
    );
}
