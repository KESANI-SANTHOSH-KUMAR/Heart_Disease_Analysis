import React, { useState, useEffect } from 'react';
import TableauEmbed from '../components/TableauEmbed';
import { BookOpen, Play, Pause, SkipForward, RotateCcw, MonitorPlay } from 'lucide-react';

const Story = () => {
    // --- CONFIGURATION ---
    const BASE_URL = "https://public.tableau.com/views/Heart_Disease_Analysis_2026/Story1";
    const TOTAL_SLIDES = 10; 
    const SLIDE_DURATION = 15000; // Increased to 15s (Tableau takes a moment to load)

    // --- STATE ---
    // We use 0-based index for Tableau (0 = Slide 1, 1 = Slide 2...)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(SLIDE_DURATION / 1000);

    // --- TIMER LOGIC ---
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        handleNextSlide();
                        return SLIDE_DURATION / 1000;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, currentIndex]);

    // --- NAVIGATION ---
    const handleNextSlide = () => {
        setCurrentIndex((prev) => {
            // If we are at the last slide (index 9), loop back to 0
            if (prev >= TOTAL_SLIDES - 1) return 0;
            return prev + 1;
        });
        setTimeLeft(SLIDE_DURATION / 1000);
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setIsPlaying(true);
        setTimeLeft(SLIDE_DURATION / 1000);
    };

    // --- URL GENERATOR (The Fix) ---
    const getActiveSlideUrl = () => {
        // 1. activePointIndex: The correct way to switch Story Points (0-based)
        // 2. ts: Adds a timestamp to FORCE the browser to reload the iframe
        return `${BASE_URL}?:embed=yes&:tabs=no&:toolbar=no&:activePointIndex=${currentIndex}&:ts=${Date.now()}`;
    };

    return (
        <div className="p-6 min-h-screen bg-slate-50 flex flex-col font-sans">
            
            {/* --- HEADER --- */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-600">
                            <BookOpen size={24} />
                        </div>
                        Clinical Data Narrative
                    </h1>
                    <p className="text-slate-500 mt-1 ml-14 text-sm font-medium">
                        Showing Slide <span className="text-indigo-600 font-bold">{currentIndex + 1}</span> of {TOTAL_SLIDES}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* Timer */}
                    {isPlaying && (
                        <div className="font-mono text-indigo-600 font-bold bg-indigo-50 px-3 py-2 rounded-lg border border-indigo-100 min-w-[80px] text-center">
                            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                        </div>
                    )}

                    {/* Play/Pause */}
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm border
                        ${isPlaying ? 'bg-white text-red-600 border-red-200 hover:bg-red-50' : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700'}`}
                    >
                        {isPlaying ? <><Pause size={18} /> Pause</> : <><Play size={18} /> Auto-Play</>}
                    </button>

                    {/* Manual Next */}
                    <button onClick={handleNextSlide} className="p-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors" title="Next Slide">
                        <SkipForward size={18} />
                    </button>

                    {/* Restart */}
                    <button onClick={handleRestart} className="p-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors" title="Restart Presentation">
                        <RotateCcw size={18} />
                    </button>
                </div>
            </div>

            {/* --- MAIN STAGE --- */}
            <div className="flex-1 bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden relative min-h-[800px] flex flex-col">
                
                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-slate-100">
                    <div 
                        className="h-full bg-indigo-500 transition-all duration-1000 ease-linear"
                        style={{ width: isPlaying ? `${((SLIDE_DURATION/1000 - timeLeft) / (SLIDE_DURATION/1000)) * 100}%` : '0%' }}
                    ></div>
                </div>

                {/* --- TABLEAU EMBED CONTAINER --- */}
                {/* KEY PROP IS CRITICAL:
                    By setting key={currentIndex}, we force React to destroy the old chart 
                    and create a brand new one every time the slide number changes. 
                    This guarantees the new URL (with the new slide number) is loaded.
                */}
                <div key={currentIndex} className="w-full h-full flex-1 bg-white relative animate-in fade-in duration-500">
                    
                    {/* Loading Overlay (Visible briefly while Tableau loads the next slide) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 -z-10">
                        <div className="flex flex-col items-center gap-3 text-slate-400">
                            <MonitorPlay size={32} className="animate-pulse" />
                            <span className="text-sm font-medium">Loading Slide {currentIndex + 1}...</span>
                        </div>
                    </div>

                    <TableauEmbed url={getActiveSlideUrl()} hideTabs={true} />
                </div>
            </div>
        </div>
    );
}

export default Story;