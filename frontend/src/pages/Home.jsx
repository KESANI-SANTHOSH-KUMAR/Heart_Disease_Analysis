import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  Activity, 
  Database, 
  LayoutDashboard, 
  Code, 
  Server, 
  FileText, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const Home = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get('/api/project-info')
      .then(res => setInfo(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="p-8 max-w-7xl mx-auto"
    >
      {/* --- HEADER SECTION --- */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Activity className="text-orange-500" size={36} />
          Heart Disease Analysis
        </h1>
        <p className="text-slate-500 text-lg">
          End-to-end analysis of Heart Disease Indicators using SQL, Tableau, and Web Technologies.
        </p>
      </div>

      {/* --- KEY METRICS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Domain */}
        <motion.div variants={item} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity size={64} className="text-blue-500" />
          </div>
          <h3 className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">Domain Context</h3>
          <p className="text-3xl font-bold text-slate-800 mb-1">Healthcare</p>
          <p className="text-slate-500 text-sm">Cardiovascular Risk Analysis</p>
        </motion.div>

        {/* Card 2: Dataset (Dynamic) */}
        <motion.div variants={item} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-sm border border-orange-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Database size={64} className="text-orange-500" />
          </div>
          <h3 className="text-orange-600 text-xs font-bold uppercase tracking-wider mb-1">Live Dataset</h3>
          <p className="text-3xl font-bold text-slate-800 mb-1">
            {info ? info.stats.dataset_size : 'Loading...'}
          </p>
          <p className="text-slate-500 text-sm">Cleaned & Processed Records</p>
        </motion.div>

        {/* Card 3: Tech Stack */}
        <motion.div variants={item} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-sm border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Code size={64} className="text-purple-500" />
          </div>
          <h3 className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-2">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white border border-purple-200 text-purple-700 text-xs font-bold rounded-full shadow-sm">Tableau</span>
            <span className="px-3 py-1 bg-white border border-blue-200 text-blue-700 text-xs font-bold rounded-full shadow-sm">MySQL</span>
            <span className="px-3 py-1 bg-white border border-green-200 text-green-700 text-xs font-bold rounded-full shadow-sm">Flask</span>
            <span className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 text-xs font-bold rounded-full shadow-sm">React</span>
          </div>
        </motion.div>
      </div>

      {/* --- PROJECT DETAILS (Problem & Objective) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText size={20} className="text-slate-400" />
            Problem Statement
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Heart disease remains a leading cause of mortality globally. Identifying key risk factors—such as BMI, smoking, and diabetes—is crucial for early detection. This project aims to analyze clinical data to uncover patterns that correlate with high cardiovascular risk.
          </p>
        </motion.div>

        <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-slate-400" />
            Project Objectives
          </h2>
          <ul className="space-y-3">
            {[
              "Ingest and clean raw CSV data into a structured MySQL Database.",
              "Develop interactive Tableau dashboards for risk factor analysis.",
              "Create a web interface to present findings to non-technical stakeholders.",
              "Optimize query performance for real-time data rendering."
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* --- PROJECT FLOW TIMELINE --- */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Development Workflow</h2>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Connection Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 -translate-y-1/2"></div>

            {/* Step 1 */}
            <div className="group flex flex-col items-center text-center bg-white p-4 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Database size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">1. Data Ingestion</h3>
              <p className="text-xs text-slate-500 mt-1">Cleaning CSVs & Import to MySQL</p>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col items-center text-center bg-white p-4 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Server size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">2. Backend Logic</h3>
              <p className="text-xs text-slate-500 mt-1">Flask API & SQL Alchemy Models</p>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col items-center text-center bg-white p-4 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <LayoutDashboard size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">3. Visualization</h3>
              <p className="text-xs text-slate-500 mt-1">Tableau Dashboard & Story Building</p>
            </div>

            {/* Step 4 */}
            <div className="group flex flex-col items-center text-center bg-white p-4 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Code size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">4. Integration</h3>
              <p className="text-xs text-slate-500 mt-1">React Frontend & Embedding</p>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;