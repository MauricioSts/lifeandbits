import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Health from "./pages/Health/Health";
import Studies from "./pages/Studies/Studies";
import Goals from "./pages/Goals/Goals";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    setSidebarOpen(false); // Fechar sidebar no mobile após navegação
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "health":
        return <Health />;
      case "studies":
        return <Studies />;
      case "goals":
        return <Goals />;
      case "finance":
        return <Goals />; // Por enquanto, usar Goals para finanças também
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="d-md-none"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className="w-100"
        style={{
          marginLeft: "0",
          minHeight: "100vh",
        }}
      >
        {/* Botão hambúrguer para mobile */}
        <button
          className="d-md-none btn position-fixed top-0 start-0 m-3"
          style={{
            zIndex: 1001,
            backgroundColor: "#1a5f3f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "0.5rem 0.75rem",
          }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <style>
          {`
            @media (min-width: 768px) {
              .main-content {
                margin-left: 250px !important;
                width: calc(100% - 250px) !important;
              }
            }
          `}
        </style>
        <div className="main-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
