import { FaHome, FaHeart, FaGraduationCap, FaBullseye, FaDollarSign } from "react-icons/fa";

type SidebarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
};

function Sidebar({ activePage, onNavigate, isOpen = true, onClose }: SidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: FaHome,
      color: "#1a5f3f",
    },
    {
      id: "health",
      label: "Saúde",
      icon: FaHeart,
      color: "#28a745",
    },
    {
      id: "studies",
      label: "Estudos",
      icon: FaGraduationCap,
      color: "#2196f3",
    },
    {
      id: "goals",
      label: "Metas",
      icon: FaBullseye,
      color: "#ff9800",
    },
    {
      id: "finance",
      label: "Finanças",
      icon: FaDollarSign,
      color: "#ffc107",
    },
  ];

  return (
    <>
      <div
        className="d-none d-md-block"
        style={{
          width: "250px",
          minHeight: "100vh",
          backgroundColor: "#1a5f3f",
          padding: "1.5rem 0",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="px-3 mb-4">
          <h3
            className="text-white fw-bold mb-0"
            style={{ fontSize: "1.25rem" }}
          >
            Life & Bits
          </h3>
        </div>

        <nav className="d-flex flex-column gap-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="btn text-start d-flex align-items-center gap-3 px-3 py-3 rounded"
                style={{
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.7)",
                  border: "none",
                  transition: "all 0.2s ease",
                  fontWeight: isActive ? "600" : "400",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  }
                }}
              >
                <Icon
                  style={{
                    fontSize: "1.25rem",
                    color: isActive ? item.color : "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <span style={{ fontSize: "0.95rem" }}>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Mobile */}
      <div
        className="d-md-none"
        style={{
          width: "250px",
          minHeight: "100vh",
          backgroundColor: "#1a5f3f",
          padding: "1.5rem 0",
          position: "fixed",
          left: isOpen ? 0 : "-250px",
          top: 0,
          zIndex: 1000,
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          transition: "left 0.3s ease",
        }}
      >
      <div className="px-3 mb-4">
        <h3
          className="text-white fw-bold mb-0"
          style={{ fontSize: "1.25rem" }}
        >
          Life & Bits
        </h3>
      </div>

      <nav className="d-flex flex-column gap-1 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="btn text-start d-flex align-items-center gap-3 px-3 py-3 rounded"
              style={{
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
                color: isActive ? "white" : "rgba(255, 255, 255, 0.7)",
                border: "none",
                transition: "all 0.2s ease",
                fontWeight: isActive ? "600" : "400",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                }
              }}
            >
              <Icon
                style={{
                  fontSize: "1.25rem",
                  color: isActive ? item.color : "rgba(255, 255, 255, 0.7)",
                }}
              />
              <span style={{ fontSize: "0.95rem" }}>{item.label}</span>
            </button>
          );
        })}
      </nav>
      </div>
    </>
  );
}

export default Sidebar;

