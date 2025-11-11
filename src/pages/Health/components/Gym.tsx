import { useState } from "react";
import { FaEdit } from "react-icons/fa";

function Gym() {
  const [treinos, setTreinos] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [treinosInput, setTreinosInput] = useState(5);

  const percentual = `${(treinos / treinosInput) * 100}%`;

  function addTreino() {
    if (treinos < treinosInput) {
      setTreinos(treinos + 1);
    } else {
      alert("Parabens voce completou todos os treinos");
    }
  }

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
            Atividade Física
          </h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
            <p className="text-dark mb-0" style={{ fontSize: "0.95rem" }}>
              Treinos da semana
            </p>
            <span
              className="fw-bold"
              style={{
                color: "#28a745",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              }}
            >
              {treinos}/{treinosInput}
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
                width: percentual,
                backgroundColor: "#28a745",
                borderRadius: "10px",
              }}
              aria-valuenow={treinos}
              aria-valuemin={0}
              aria-valuemax={treinosInput}
            ></div>
          </div>
          <button
            onClick={addTreino}
            className="btn w-100 py-2 py-md-2 rounded mt-2"
            style={{
              backgroundColor: "#d4edda",
              color: "#333",
              border: "none",
              fontSize: "0.95rem",
              minHeight: "44px",
            }}
          >
            <span className="me-1">+</span>Marcar treino de hoje
          </button>
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
              <h5 className="modal-title">Editar Atividade Física</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="gym">Quantidade de treinos</label>
              <input
                type="number"
                className="form-control"
                value={treinosInput}
                onChange={(e) => setTreinosInput(Number(e.target.value))}
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

export default Gym;
