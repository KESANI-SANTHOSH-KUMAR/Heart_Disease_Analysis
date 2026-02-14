import React, { useState } from 'react';
import TableauEmbed from '../components/TableauEmbed';
import { 
    LayoutDashboard, FileText, Users, Activity, HeartPulse, Menu, X, 
    BarChart2, PieChart, TrendingUp, AlertCircle, CheckCircle2, Thermometer 
} from 'lucide-react';

const Dashboard = () => {
    // --- 1. CONFIGURATION: 2 Dashboards + 10 Sheets ---
    // ⚠️ ACTION REQUIRED: Paste your specific Tableau Public link for each item below.
    const DASHBOARDS = {
        // === SECTION 1: DASHBOARDS ===
        dashboard_main: {
            title: "Clinical Analysis Dashboard",
            desc: "The comprehensive interactive dashboard combining all key insights.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/ClinicalAnalysis", // <--- PASTE LINK 1 HERE
            icon: <LayoutDashboard size={18} />,
            color: "text-blue-600",
            bg: "bg-blue-50 border-blue-200",
            type: "Dashboard"
        },
        dashboard_story: {
            title: "Patient Demographics Dashboard",
            desc: "Focused view on patient age, gender, and racial distribution.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/PatientDemographics", // <--- PASTE LINK 2 HERE
            icon: <FileText size={18} />,
            color: "text-indigo-600",
            bg: "bg-indigo-50 border-indigo-200",
            type: "Dashboard"
        },

        // === SECTION 2: INDIVIDUAL SHEETS ===
        sheet_gender: {
            title: "Gender vs Heart Disease",
            desc: "Bar chart comparing heart disease frequency between males and females.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/GendervsDisease", // <--- PASTE LINK 3 HERE
            icon: <Users size={18} />,
            color: "text-purple-600",
            bg: "bg-purple-50 border-purple-200",
            type: "Sheet"
        },
        sheet_age: {
            title: "Age vs Heart Disease",
            desc: "Analysis of how heart disease risk increases with age groups.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/AgevsHeartDisease", // <--- PASTE LINK 4 HERE
            icon: <BarChart2 size={18} />,
            color: "text-emerald-600",
            bg: "bg-emerald-50 border-emerald-200",
            type: "Sheet"
        },
        sheet_diabetic: {
            title: "Diabetic vs Stroke",
            desc: "Correlation analysis between diabetes status and stroke incidents.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/DiabeticvsStroke", // <--- PASTE LINK 5 HERE
            icon: <Activity size={18} />,
            color: "text-red-600",
            bg: "bg-red-50 border-red-200",
            type: "Sheet"
        },
        sheet_lifestyle: {
            title: "Smoking & Alcohol Impact",
            desc: "Impact of lifestyle choices (Smoking/Alcohol) on cardiac health.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/ImpactofSmokingAlcohol", // <--- PASTE LINK 6 HERE
            icon: <HeartPulse size={18} />,
            color: "text-orange-600",
            bg: "bg-orange-50 border-orange-200",
            type: "Sheet"
        },
        sheet_race: {
            title: "Race vs Heart Disease",
            desc: "Demographic breakdown of heart disease cases by race.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/RacevsHeartDisease", // <--- PASTE LINK 7 HERE
            icon: <PieChart size={18} />,
            color: "text-cyan-600",
            bg: "bg-cyan-50 border-cyan-200",
            type: "Sheet"
        },
        sheet_general_health: {
            title: "General Health vs Disease",
            desc: "Comparison of perceived 'General Health' vs actual diagnosis.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/GeneralHealthvsHeartDisease", // <--- PASTE LINK 8 HERE
            icon: <Thermometer size={18} />,
            color: "text-teal-600",
            bg: "bg-teal-50 border-teal-200",
            type: "Sheet"
        },
        sheet_activity: {
            title: "Physical Activity vs Disease",
            desc: "The effect of regular physical activity on heart disease rates.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/PhysicalActivityvsHeartDisease", // <--- PASTE LINK 9 HERE
            icon: <Activity size={18} />,
            color: "text-lime-600",
            bg: "bg-lime-50 border-lime-200",
            type: "Sheet"
        },
        sheet_bmi: {
            title: "Age vs BMI vs Diabetic",
            desc: "Multi-variate analysis of Age, BMI, and Diabetes status.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/AgevsBMIvsDiabetic", // <--- PASTE LINK 10 HERE
            icon: <TrendingUp size={18} />,
            color: "text-pink-600",
            bg: "bg-pink-50 border-pink-200",
            type: "Sheet"
        },
        sheet_triple: {
            title: "Triple Threat Analysis",
            desc: "Patients suffering from Stroke + Heart Disease + Diabetes.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/PeoplegotstrokesufferingfromHeartDiseaseandDiabetic", // <--- PASTE LINK 11 HERE
            icon: <AlertCircle size={18} />,
            color: "text-rose-600",
            bg: "bg-rose-50 border-rose-200",
            type: "Sheet"
        },
        sheet_other: {
            title: "Other Diseases vs Stroke",
            desc: "Impact of Kidney Disease, Asthma, and Skin Cancer on Stroke.",
            url: "https://public.tableau.com/views/Heart_Disease_Analysis_2026/OtherDiseasesvsStroke", // <--- PASTE LINK 12 HERE
            icon: <Activity size={18} />,
            color: "text-violet-600",
            bg: "bg-violet-50 border-violet-200",
            type: "Sheet"
        }
    };

    // --- 2. STATE ---
    const [activeView, setActiveView] = useState('dashboard_main');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const current = DASHBOARDS[activeView];

    return (
        <div className="p-6 min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-hidden">
            
            {/* --- TOP HEADER (Dynamic) --- */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${current.bg.split(' ')[2]} ${current.bg.split(' ')[0]}`}>
                            {React.cloneElement(current.icon, { className: current.color })}
                        </div>
                        {current.title}
                    </h1>
                    <p className="text-slate-500 mt-1 ml-12 text-sm">
                        <span className="font-bold uppercase text-xs tracking-wider bg-slate-200 text-slate-600 px-2 py-0.5 rounded mr-2">
                            {current.type}
                        </span>
                        {current.desc}
                    </p>
                </div>

                {/* MENU BUTTON */}
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:bg-slate-900 transition-all hover:scale-105 active:scale-95"
                >
                    <Menu size={20} /> 
                    Select View (12)
                </button>
            </div>

            {/* --- MAIN CHART CONTAINER --- */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden relative min-h-[750px]">
                {/* Decorative Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-slate-200 via-blue-400 to-slate-200 animate-pulse"></div>
                
                {/* Tableau Embed - Only Loads the Active View */}
                <TableauEmbed url={current.url} />
            </div>

            {/* --- SLIDE-OUT MENU PANEL --- */}
            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                    
                    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform animate-in slide-in-from-right duration-300">
                        
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <LayoutDashboard size={20} className="text-blue-600"/> Navigation
                            </h2>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 space-y-6">
                            
                            {/* Group 1: Dashboards */}
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Main Dashboards</h3>
                                <div className="space-y-2">
                                    {Object.keys(DASHBOARDS).filter(k => DASHBOARDS[k].type === 'Dashboard').map((key) => {
                                        const item = DASHBOARDS[key];
                                        const isActive = activeView === key;
                                        return (
                                            <button key={key} onClick={() => { setActiveView(key); setIsMenuOpen(false); }}
                                                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${isActive ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'border-slate-100 hover:bg-slate-50'}`}>
                                                {React.cloneElement(item.icon, { size: 18, className: isActive ? item.color : 'text-slate-400' })}
                                                <span className={`block text-sm ${isActive ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>{item.title}</span>
                                                {isActive && <CheckCircle2 size={18} className="text-blue-600 ml-auto" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Group 2: Sheets */}
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Detailed Sheets</h3>
                                <div className="space-y-2">
                                    {Object.keys(DASHBOARDS).filter(k => DASHBOARDS[k].type === 'Sheet').map((key) => {
                                        const item = DASHBOARDS[key];
                                        const isActive = activeView === key;
                                        return (
                                            <button key={key} onClick={() => { setActiveView(key); setIsMenuOpen(false); }}
                                                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all ${isActive ? 'bg-slate-100 border-slate-400 font-bold' : 'border-transparent hover:bg-slate-50'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: isActive ? item.color : 'text-slate-400' })}
                                                <span className={`block text-sm ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{item.title}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;