import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Database, BarChart3, Activity, FileText } from 'lucide-react'; // Install: npm install lucide-react

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path 
    ? "bg-orange-100 text-orange-600 border-r-4 border-orange-500 font-bold" 
    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800";

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-slate-200 overflow-y-auto z-10">
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-xl font-bold text-slate-800">Guided Project</h1>
        <p className="text-xs text-slate-400 mt-1">Heart Disease Analysis</p>
      </div>

      <nav className="mt-6 px-4 space-y-2">
        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Workspace</p>
        
        <Link to="/" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive('/')}`}>
          <LayoutDashboard size={18} />
          Home
        </Link>
        

        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Data Flow</p>
        
        <Link to="/data-prep" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive('/data-prep')}`}>
          <Database size={18} />
          Data & SQL
        </Link>

        <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive('/dashboard')}`}>
          <BarChart3 size={18} />
          Visualizations
        </Link>

        <Link to="/story" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive('/story')}`}>
          <FileText size={18} />
          Data Story
        </Link>

        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Testing</p>

        <Link to="/performance" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${isActive('/performance')}`}>
          <Activity size={18} />
          Performance
        </Link>

<Link to="/documentation" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors">
  <FileText size={18} />
  Documentation
</Link>
      </nav>
    </div>
  );
};

export default Sidebar;