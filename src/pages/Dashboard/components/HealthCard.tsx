import { FaHeart } from "react-icons/fa";

function HealthCard() {
  // Dados mockados
  const healthData = {
    treinos: {
      atual: 12,
      meta: 20,
      label: "Treinos do mês",
    },
    agua: {
      atual: 1.5,
      meta: 2.5,
      label: "Água (litros)",
      unidade: "L",
    },

  };

  const calcularPercentual = (atual: number, meta: number) => {
    return Math.min((atual / meta) * 100, 100);
  };

  return (
    <div
      className="card shadow-sm h-100"
      style={{
        border: "2px solid #d4edda",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <div className="card-body p-3 p-md-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <FaHeart style={{ fontSize: "1.5rem", color: "#28a745" }} />
          <h3 className="h5 fw-bold mb-0" style={{ color: "#1a5f3f" }}>
            Saúde
          </h3>
        </div>

        {/* Treinos */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{healthData.treinos.label}</span>
            <span className="small fw-semibold" style={{ color: "#28a745" }}>
              {healthData.treinos.atual} / {healthData.treinos.meta}
            </span>
          </div>
          <div
            className="progress"
            style={{
              height: "8px",
              borderRadius: "10px",
              backgroundColor: "#e9ecef",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${calcularPercentual(
                  healthData.treinos.atual,
                  healthData.treinos.meta
                )}%`,
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={healthData.treinos.atual}
              aria-valuemin={0}
              aria-valuemax={healthData.treinos.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  healthData.treinos.atual,
                  healthData.treinos.meta
                )
              )}
              %
            </span>
          </div>
        </div>

        {/* Água */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{healthData.agua.label}</span>
            <span className="small fw-semibold" style={{ color: "#28a745" }}>
              {healthData.agua.atual} / {healthData.agua.meta} {healthData.agua.unidade}
            </span>
          </div>
          <div
            className="progress"
            style={{
              height: "8px",
              borderRadius: "10px",
              backgroundColor: "#e9ecef",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${calcularPercentual(
                  healthData.agua.atual,
                  healthData.agua.meta
                )}%`,
                backgroundColor: "#2196f3",
                borderRadius: "10px",
              }}
              aria-valuenow={healthData.agua.atual}
              aria-valuemin={0}
              aria-valuemax={healthData.agua.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  healthData.agua.atual,
                  healthData.agua.meta
                )
              )}
              %
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HealthCard;

