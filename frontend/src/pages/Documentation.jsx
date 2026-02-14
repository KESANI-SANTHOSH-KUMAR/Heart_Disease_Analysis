import React from 'react';
import { BookOpen, Video, FileText, Download, PlayCircle, FileJson, ArrowRight } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="p-8 min-h-screen bg-slate-50 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wide mb-4">
          <BookOpen size={14} /> Knowledge Base
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Project Documentation
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Comprehensive guides, video walkthroughs, and submission deliverables for the Heart Disease Analysis project.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* --- MAIN DELIVERABLES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Video Presentation */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="bg-indigo-600 p-6 flex justify-between items-start">
                    <div className="p-3 bg-white/20 rounded-xl text-white backdrop-blur-sm">
                        <Video size={32} />
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-md">
                        MP4 / MOV
                    </span>
                </div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                        Project Explanation Video
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        A complete end-to-end walkthrough covering data ingestion, SQL processing, and dashboard insights. 
                        Demonstrates the "Triple Threat" analysis in real-time.
                    </p>
                    <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                        <PlayCircle size={20} /> Watch Video
                    </button>
                </div>
            </div>

            {/* Card 2: PDF Documentation */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="bg-orange-500 p-6 flex justify-between items-start">
                    <div className="p-3 bg-white/20 rounded-xl text-white backdrop-blur-sm">
                        <FileText size={32} />
                    </div>
                     <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-md">
                        PDF Format
                    </span>
                </div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                        Step-by-Step Guide
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Detailed technical documentation including database schema screenshots, 
                        Tableau calculation formulas, and server configuration steps.
                    </p>
                    <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 group-hover:border-orange-500 group-hover:text-orange-600 transition-all flex items-center justify-center gap-2">
                        <FileText size={20} /> Read Documentation
                    </button>
                </div>
            </div>
        </div>

        {/* --- DOWNLOAD SECTION (Featured) --- */}
        <div className="relative mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl transform rotate-1 opacity-50 blur-sm -z-10"></div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="flex items-start gap-6">
                    <div className="hidden md:flex p-4 bg-slate-100 rounded-2xl text-slate-600">
                        <FileJson size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Official Project Template</h3>
                        <p className="text-slate-500 max-w-md">
                            Get a head start with the pre-configured directory structure, 
                            sample SQL queries, and React components used in this demo.
                        </p>
                    </div>
                </div>

                <button className="px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center gap-3 whitespace-nowrap">
                    <Download size={20} /> Download Kit
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Documentation;