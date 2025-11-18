import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

function HealthCard() {
  const DEFAULT_TREINOS_META = 20;
  const DEFAULT_TREINOS_LABEL = "Treinos do mês";

  const [treinosMeta, setTreinosMeta] = useState(DEFAULT_TREINOS_META);
  const [treinosAtual, setTreinosAtual] = useState(0);

  useEffect(() => {
    const parseNumeroLocal = (valor: string | null) => {
      if (!valor) return undefined;
      const numero = Number(valor);
      return Number.isFinite(numero) ? numero : undefined;
    };

    const metaMensal = parseNumeroLocal(localStorage.getItem("metaMensal"));
    const treinosSalvos = parseNumeroLocal(localStorage.getItem("treinoSemanal"));

    if (metaMensal !== undefined && metaMensal > 0) {
      setTreinosMeta(metaMensal);
    } else {
      setTreinosMeta(DEFAULT_TREINOS_META);
    }

    if (treinosSalvos !== undefined && treinosSalvos >= 0) {
      setTreinosAtual(treinosSalvos);
    } else {
      setTreinosAtual(0);
    }
  }, []);

  const healthData = {
    treinos: {
      meta: treinosMeta,
      label: DEFAULT_TREINOS_LABEL,
    },
    agua: {
      atual: 1.5,
      meta: 2.5,
      label: "Água (litros)",
      unidade: "L",
    },
  };

  const calcularPercentual = (atual: number, meta: number) => {
    if (meta <= 0) return 0;
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
              {treinosAtual} / {healthData.treinos.meta}
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
                width: `${calcularPercentual(treinosAtual, healthData.treinos.meta)}%`,
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={treinosAtual}
              aria-valuemin={0}
              aria-valuemax={healthData.treinos.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(treinosAtual, healthData.treinos.meta)
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
              {healthData.agua.atual} / {healthData.agua.meta}{" "}
              {healthData.agua.unidade}
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
                calcularPercentual(healthData.agua.atual, healthData.agua.meta)
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
