import { FaGraduationCap } from "react-icons/fa";

function Studies() {
  return (
    <div
      className="min-vh-100 p-3 p-md-4 p-lg-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        className="container-fluid px-3 px-md-4"
        style={{ maxWidth: "1200px" }}
      >
        <div className="text-center mb-4 mb-md-5">
          <h1
            className="h2 h3-md display-4 fw-bold text-dark mb-3 mb-md-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            <FaGraduationCap className="me-2" style={{ color: "#2196f3" }} />
            Estudos
          </h1>
        </div>
        <div className="card shadow-sm p-4">
          <p className="text-muted mb-0">
            Página de Estudos em desenvolvimento...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Studies;

