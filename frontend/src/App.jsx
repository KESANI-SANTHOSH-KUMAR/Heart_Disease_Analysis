import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Story from './pages/Story';
import Performance from './pages/Performance';
import DataPrep from './pages/DataPrep';
import Documentation from './pages/Documentation';
// Layout Shell
const Layout = ({ children }) => (
  <div className="flex bg-slate-50 min-h-screen">
    <Sidebar />
    <div className="flex-1 ml-64"> {/* ml-64 pushes content right to make room for sidebar */}
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/story" element={<Story />} />
          <Route path="/performance" element={<Performance />} />
          {/* Add a dummy route for Data/SQL if needed */}
          <Route path="/data-prep" element={<DataPrep />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;