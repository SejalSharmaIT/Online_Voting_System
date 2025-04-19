import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
//import { FaVoteYea, FaChartBar } from "react-icons/fa";
import Login from "./pages/Login";
import VotePage from "./pages/VotePage";
import ResultsPage from "./pages/ResultsPage";
import './App.css';


// Home Page Component
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Online Voting System</h1>
      <p>Vote securely and see live results!</p>
    </div>
  );
}


// Sidebar Menu Component
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Voting System</h2>
      <nav>
        <ul>
          <li><Link to="/login">Login to Vote</Link></li>
          <li><Link to="/dashboard">Candidate</Link></li>
          <li><Link to="/results">View Result</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// Layout Wrapper with Sidebar
function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

// App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout><VotePage /></Layout>} />
        <Route path="/results" element={<Layout><ResultsPage /></Layout>} />
      </Routes>
    </Router>
  );
}
export default App;