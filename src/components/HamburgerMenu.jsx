import { useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button 
                className="text-white focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            {isOpen && (
                <div className="absolute top-12 right-4 bg-primary p-4 rounded-lg shadow-lg flex flex-col gap-2">
                    <a href="/" className="text-white">Home</a>
                    <a href="/about" className="text-white">About</a>
                    <a href="/contact" className="text-white">Contact</a>
                </div>
            )}
        </div>
    );
}
