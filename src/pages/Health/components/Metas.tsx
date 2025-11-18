import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import type { GymProps } from "../../../types/Health/GymProps";

function Metas({ treinos }: GymProps) {
  const [showModal, setShowModal] = useState(false);
  const [meta, setMeta] = useState(() => {
    const metaMensal = localStorage.getItem("metaMensal");
    return metaMensal ? JSON.parse(metaMensal) : "0";
  });

  useEffect(() => {
    localStorage.setItem("metaMensal", JSON.stringify(meta));
  }, [meta]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div
        className="card shadow-sm p-3 p-md-4 position-relative"
        style={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}
      >
        <button
          onClick={handleOpenModal}
          className="btn btn-link position-absolute top-0 end-0 p-2"
          style={{
            color: "#6c757d",
            textDecoration: "none",
            zIndex: 1,
          }}
        >
          <FaEdit style={{ fontSize: "1.2rem" }} />
        </button>

        <div className="d-flex flex-column gap-2 gap-md-3">
          <h2
            className="h5 h4-md fw-bold text-dark mb-0"
            style={{ fontSize: "clamp(1.1rem, 3vw, 1.25rem)" }}
          >
            Metas mensai:
          </h2>

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
            <p className="text-dark mb-0" style={{ fontSize: "0.95rem" }}>
              Treinos:
            </p>

            <span
              className="fw-bold"
              style={{
                color: "#28a745",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              }}
            >
              {treinos}/{meta}
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
                width: meta > 0 ? `${(treinos / meta) * 100}%` : "0%",
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={treinos}
              aria-valuemin={0}
              aria-valuemax={meta}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Criar nova meta:</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="gym">Quantidade de treinos mensais</label>
              <input
                type="number"
                id="gym"
                className="form-control"
                onChange={(e) => setMeta(Number(e.target.value))}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Fechar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCloseModal}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleCloseModal}
        ></div>
      )}
    </>
  );
}

export default Metas;
