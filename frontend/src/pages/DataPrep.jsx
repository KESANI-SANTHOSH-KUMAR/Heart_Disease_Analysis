import React from 'react';
import { Database, Download, FileJson, Server, Terminal, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

const DataPrep = () => {
  return (
    <div className="p-8 min-h-screen bg-slate-50 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-4">
          <Database size={14} /> Backend Workflow
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Data & SQL Operations
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          The end-to-end process of acquiring, storing, and preparing the heart disease dataset for analysis.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative">
        
        {/* Timeline Line (Desktop Only) */}
        <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-slate-200 hidden md:block"></div>

        {/* --- STEP 1: DOWNLOADING --- */}
        <div className="relative pl-0 md:pl-24">
            {/* Number Badge */}
            <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-4 border-blue-50 rounded-2xl items-center justify-center font-bold text-2xl text-blue-600 shadow-sm z-10">
                01
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-1.5 w-full bg-blue-500"></div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                        <Download className="text-blue-500" size={28} /> 
                        Downloading the Dataset
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Acquire the finalized dataset required for the Tableau project, ensuring it is clean, 
                        relevant, and aligned with the defined problem.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-4">
                        <FileJson size={32} className="text-blue-600" />
                        <div>
                            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Target Source File</p>
                            <p className="text-lg font-bold text-slate-800 font-mono">Heart_new2.csv</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- STEP 2: STORING IN DB --- */}
        <div className="relative pl-0 md:pl-24">
             <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-4 border-purple-50 rounded-2xl items-center justify-center font-bold text-2xl text-purple-600 shadow-sm z-10">
                02
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-1.5 w-full bg-purple-500"></div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                        <Server className="text-purple-500" size={28} /> 
                        Storing Data in DB
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Store the collected dataset in a structured MySQL database system. 
                        Use SQL operations to clean, filter, and transform the data.
                    </p>

                    {/* SQL Code Block */}
                    <div className="bg-slate-900 rounded-xl p-6 shadow-inner font-mono text-sm text-slate-300 relative group border border-slate-800">
                        <div className="absolute top-4 right-4 flex gap-1.5 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        
                        <div className="space-y-3 pt-2">
                            <div className="flex gap-2">
                                <span className="text-purple-400">➜</span>
                                <span className="text-yellow-300">CREATE DATABASE</span> heart_db;
                            </div>
                            <div className="flex gap-2">
                                <span className="text-purple-400">➜</span>
                                <span className="text-slate-400"># Import CSV via Table Data Import Wizard</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-purple-400">➜</span>
                                <span className="text-slate-400"># Validate Schema Integrity & Indexes</span>
                            </div>
                            <div className="flex gap-2 mt-4 text-green-400">
                                <CheckCircle2 size={16} /> 
                                <span>Database initialized successfully.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- STEP 3: PREPARATION LOGIC --- */}
        <div className="relative pl-0 md:pl-24">
             <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-4 border-orange-50 rounded-2xl items-center justify-center font-bold text-2xl text-orange-600 shadow-sm z-10">
                03
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-1.5 w-full bg-orange-500"></div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                        <Terminal className="text-orange-500" size={28} /> 
                        Data Preparation Logic
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Clean, transform, and organize the connected data to ensure consistency. 
                        This includes handling null values and structuring data for visualization.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl relative">
                        <Quote size={40} className="absolute top-4 left-4 text-orange-200 -z-10 transform -scale-x-100" />
                        <p className="text-orange-900 font-medium italic relative z-10 pl-2">
                            "Even with a clean dataset, it's essential to go through a review process 
                            to ensure it's truly ready for analysis."
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full flex items-center gap-1 border border-slate-200">
                            <ShieldCheck size={14} /> Handle Nulls
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full flex items-center gap-1 border border-slate-200">
                            <ShieldCheck size={14} /> Normalize Types
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full flex items-center gap-1 border border-slate-200">
                            <ShieldCheck size={14} /> Structure Data
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DataPrep;