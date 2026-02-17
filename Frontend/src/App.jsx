import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Corrected Imports based on your project structure
import Login from "./pages/Login";
import Useage from "./pages/Usage";
import Billing from "./pages/Billing"; 
import Profile from "./pages/Profile"; 
import Support from "./pages/Support";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

/**
 * ScrollToTop Component
 * Resets the scroll position of the main container on every route change.
 */
const ScrollToTop = ({ containerRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      // Instantly resets scroll to the very top for a clean page entry
      containerRef.current.scrollTo(0, 0);
    }
  }, [pathname, containerRef]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;

  // Hides Navbar and Footer on Login and Register pages
  const isAuthPage = path === "/login" || path === "/" || path === "/register";
  
  // Reference to the scrollable main area
  const mainRef = useRef(null);

  return (
    <div className="w-full max-w-md min-h-screen md:min-h-[850px] md:max-h-[90vh] bg-white shadow-2xl md:rounded-[32px] overflow-hidden flex flex-col relative border-x border-gray-100">
      
      {/* Resets scroll position of 'mainRef' on route changes */}
      <ScrollToTop containerRef={mainRef} />

      {/* Persistent Top Navbar: Only shown for authenticated routes */}
      {!isAuthPage && <Navbar />}

      {/* Main Content Area
          pt-20 is added dynamically to prevent content from hiding behind the Navbar
      */}
      <main 
        ref={mainRef}
        className={`flex-1 overflow-y-auto pb-24 scroll-smooth ${!isAuthPage ? 'pt-20' : ''}`}
      > 
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usage" element={<Useage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      {/* Persistent Bottom Footer: Hidden on Auth pages */}
      {!isAuthPage && (
        <div className="absolute bottom-0 left-0 right-0 z-50">
          <Footer />
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Centering the mobile view on a desktop background */}
      <div className="min-h-screen bg-slate-100 flex justify-center items-center font-sans antialiased">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;