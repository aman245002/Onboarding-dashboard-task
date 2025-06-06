import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard'; // ✅ import Dashboard

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-8 px-4">
          <Routes>
            {/* Redirect from / to /onboarding */}
            <Route path="/" element={<Navigate to="/onboarding" />} />

            {/* Onboarding route */}
            <Route path="/onboarding" element={<Onboarding />} />

            {/* ✅ Dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
