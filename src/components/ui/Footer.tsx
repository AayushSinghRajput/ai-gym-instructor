export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-zinc-950 py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} AI Gym Tutor. Build form, prevent injury.
                </p>
            </div>
        </footer>
    );
}
