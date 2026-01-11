import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                    <Dumbbell className="w-8 h-8 text-primary" />
                    <span className="text-xl font-bold tracking-tight">AI Gym Tutor</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/exercises" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Exercises
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link
                        href="/exercises"
                        className="hidden sm:block px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Start Training
                    </Link>
                </div>
            </div>
        </nav>
    );
}
