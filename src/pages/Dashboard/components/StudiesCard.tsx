import { FaGraduationCap } from "react-icons/fa";

function StudiesCard() {
  // Dados mockados
  const studiesData = {
    horasEstudo: {
      atual: 25,
      meta: 40,
      label: "Horas de estudo (mês)",
      unidade: "h",
    },
    cursos: {
      atual: 2,
      meta: 4,
      label: "Cursos em andamento",
    },
    livros: {
      atual: 1,
      meta: 3,
      label: "Livros lidos (mês)",
    },
  };

  const calcularPercentual = (atual: number, meta: number) => {
    return Math.min((atual / meta) * 100, 100);
  };

  return (
    <div
      className="card shadow-sm h-100"
      style={{
        border: "2px solid #cfe2ff",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <div className="card-body p-3 p-md-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <FaGraduationCap style={{ fontSize: "1.5rem", color: "#2196f3" }} />
          <h3 className="h5 fw-bold mb-0" style={{ color: "#084298" }}>
            Estudos
          </h3>
        </div>

        {/* Horas de Estudo */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">
              {studiesData.horasEstudo.label}
            </span>
            <span className="small fw-semibold" style={{ color: "#2196f3" }}>
              {studiesData.horasEstudo.atual} / {studiesData.horasEstudo.meta}{" "}
              {studiesData.horasEstudo.unidade}
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
                  studiesData.horasEstudo.atual,
                  studiesData.horasEstudo.meta
                )}%`,
                backgroundColor: "#2196f3",
                borderRadius: "10px",
              }}
              aria-valuenow={studiesData.horasEstudo.atual}
              aria-valuemin={0}
              aria-valuemax={studiesData.horasEstudo.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  studiesData.horasEstudo.atual,
                  studiesData.horasEstudo.meta
                )
              )}
              %
            </span>
          </div>
        </div>

        {/* Cursos */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{studiesData.cursos.label}</span>
            <span className="small fw-semibold" style={{ color: "#2196f3" }}>
              {studiesData.cursos.atual} / {studiesData.cursos.meta}
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
                  studiesData.cursos.atual,
                  studiesData.cursos.meta
                )}%`,
                backgroundColor: "#ffc107",
                borderRadius: "10px",
              }}
              aria-valuenow={studiesData.cursos.atual}
              aria-valuemin={0}
              aria-valuemax={studiesData.cursos.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  studiesData.cursos.atual,
                  studiesData.cursos.meta
                )
              )}
              %
            </span>
          </div>
        </div>

        {/* Livros */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="small text-muted">{studiesData.livros.label}</span>
            <span className="small fw-semibold" style={{ color: "#2196f3" }}>
              {studiesData.livros.atual} / {studiesData.livros.meta}
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
                  studiesData.livros.atual,
                  studiesData.livros.meta
                )}%`,
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={studiesData.livros.atual}
              aria-valuemin={0}
              aria-valuemax={studiesData.livros.meta}
            ></div>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <span className="small text-muted">
              {Math.round(
                calcularPercentual(
                  studiesData.livros.atual,
                  studiesData.livros.meta
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

export default StudiesCard;

