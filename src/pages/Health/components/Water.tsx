import { useState } from "react";
import { FaTint, FaEdit } from "react-icons/fa";

function Water() {
  const [water, setWater] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [waterInput, setWaterInput] = useState(2);

  const percentual = `${(water / waterInput) * 100}%`;

  function Water250() {
    setWater(water + 0.25);
  }

  function Water500() {
    setWater(water + 0.5);
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
            zIndex: 1
          }}
        >
          <FaEdit style={{ fontSize: "1.2rem" }} />
        </button>
        <div className="d-flex flex-column gap-2 gap-md-3">
          <h2 className="h5 h4-md fw-bold text-dark mb-0" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}>
            Hidratação
          </h2>
        <div className="d-flex align-items-center gap-2">
          <FaTint style={{ color: "#007bff", fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }} />
          <div className="d-flex align-items-baseline">
            <span
              className="fw-bold me-1"
              style={{ color: "#0056b3", fontSize: "clamp(1.4rem, 4vw, 1.8rem)" }}
            >
              {water.toFixed(2)}
            </span>
            <span className="text-muted" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
              /{waterInput}L
            </span>
          </div>
        </div>
        <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
          {waterInput<=water
            ? "Parabéns você conseguiu bater a sua meta!!"
            : "Você vai conseguir!!"}
            
        </p>
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
              backgroundColor: "#007bff",
              borderRadius: "10px",
            }}
            aria-valuenow={water}
            aria-valuemin={0}
            aria-valuemax={waterInput}
          ></div>
        </div>
        <div className="d-flex gap-2">
          <button
            onClick={Water250}
            className="btn flex-fill py-2 py-md-2 rounded"
            style={{
              backgroundColor: "#e9ecef",
              color: "#333",
              border: "none",
              fontSize: '0.9rem',
              minHeight: '44px'
            }}
          >
            <span className="me-1">+</span>250ml
          </button>
          <button
            onClick={Water500}
            className="btn flex-fill py-2 py-md-2 rounded"
            style={{
              backgroundColor: "#e9ecef",
              color: "#333",
              border: "none",
              fontSize: '0.9rem',
              minHeight: '44px'
            }}
          >
            <span className="me-1">+</span>500ml
          </button>
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
            <h5 className="modal-title">Editar Hidratação</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="water">Quantidade de água em litros</label>
            <input type="number" className="form-control" value={waterInput} onChange={(e) => setWaterInput(Number(e.target.value))} />
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

export default Water;
