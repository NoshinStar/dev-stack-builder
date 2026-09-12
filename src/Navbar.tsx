import { useState } from "react";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">

                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                            DS
                        </div>
                        <span className="font-bold text-lg text-gray-900">
                            Dev
                            <span className="bg-brand-gradient bg-clip-text text-transparent">Stack</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hidden sm:block text-sm font-medium text-gray-700">
                            Sign In
                        </a>
                        <button className="bg-brand-gradient text-white text-sm font-medium px-5 py-2 rounded-full">
                            Sign Up
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden pb-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-sm font-medium text-gray-700">
                                {link}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav >

    )
}