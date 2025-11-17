import { FaDollarSign } from "react-icons/fa";

function FinanceCard() {
  // Dados mockados
  const financeData = {
    economia: {
      atual: 2500,
      meta: 5000,
      label: "Economia do mês",
      unidade: "R$",
    },
    gastos: {
      atual: 3200,
      limite: 4000,
      label: "Gastos do mês",
      unidade: "R$",
    },
    investimentos: {
      atual: 15000,
      meta: 20000,
      label: "Investimentos",
      unidade: "R$",
    },
  };

  const calcularPercentual = (atual: number, meta: number) => {
    return Math.min((atual / meta) * 100, 100);
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div
      className="card shadow-sm h-100"
      style={{
        border: "2px solid #fff3cd",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <div className="card-body p-3 p-md-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <FaDollarSign style={{ fontSize: "1.5rem", color: "#ff9800" }} />
          <h3 className="h5 fw-bold mb-0" style={{ color: "#856404" }}>
            Finanças
          </h3>
        </div>

        {/* Economia */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{financeData.economia.label}</span>
            <span className="small fw-semibold" style={{ color: "#28a745" }}>
              {formatarMoeda(financeData.economia.atual)} /{" "}
              {formatarMoeda(financeData.economia.meta)}
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
                  financeData.economia.atual,
                  financeData.economia.meta
                )}%`,
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={financeData.economia.atual}
              aria-valuemin={0}
              aria-valuemax={financeData.economia.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  financeData.economia.atual,
                  financeData.economia.meta
                )
              )}
              %
            </span>
          </div>
        </div>

        {/* Gastos */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{financeData.gastos.label}</span>
            <span className="small fw-semibold" style={{ color: "#dc3545" }}>
              {formatarMoeda(financeData.gastos.atual)} /{" "}
              {formatarMoeda(financeData.gastos.limite)}
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
              className="progress-bar bg-warning"
              role="progressbar"
              style={{
                width: `${calcularPercentual(
                  financeData.gastos.atual,
                  financeData.gastos.limite
                )}%`,
                borderRadius: "10px",
              }}
              aria-valuenow={financeData.gastos.atual}
              aria-valuemin={0}
              aria-valuemax={financeData.gastos.limite}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  financeData.gastos.atual,
                  financeData.gastos.limite
                )
              )}
              %
            </span>
          </div>
        </div>

        {/* Investimentos */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">
              {financeData.investimentos.label}
            </span>
            <span className="small fw-semibold" style={{ color: "#28a745" }}>
              {formatarMoeda(financeData.investimentos.atual)} /{" "}
              {formatarMoeda(financeData.investimentos.meta)}
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
                  financeData.investimentos.atual,
                  financeData.investimentos.meta
                )}%`,
                backgroundColor: "#2196f3",
                borderRadius: "10px",
              }}
              aria-valuenow={financeData.investimentos.atual}
              aria-valuemin={0}
              aria-valuemax={financeData.investimentos.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  financeData.investimentos.atual,
                  financeData.investimentos.meta
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

export default FinanceCard;

