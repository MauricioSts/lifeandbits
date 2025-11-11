import { useState } from "react";

function Gym() {
  const [treinos, setTreinos] = useState(0);

  const percentual = `${(treinos / 5) * 100}%`;

  function addTreino() {
    if (treinos < 5) {
      setTreinos(treinos + 1);
    } else {
      alert("Parabens voce completou todos os treinos");
    }
  }
  return (
    <div
      className="card shadow-sm p-3 p-md-4"
      style={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}
    >
      <div className="d-flex flex-column gap-2 gap-md-3">
        <h2 className="h5 h4-md fw-bold text-dark mb-0" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}>
          Atividade Física
        </h2>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
          <p className="text-dark mb-0" style={{ fontSize: '0.95rem' }}>Treinos da semana</p>
          <span
            className="fw-bold"
            style={{ color: "#28a745", fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}
          >
            {treinos}/5
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
            aria-valuemax={5}
          ></div>
        </div>
        <button
          onClick={addTreino}
          className="btn w-100 py-2 py-md-2 rounded mt-2"
          style={{ 
            backgroundColor: "#d4edda", 
            color: "#333", 
            border: "none",
            fontSize: '0.95rem',
            minHeight: '44px'
          }}
        >
          <span className="me-1">+</span>Marcar treino de hoje
        </button>
      </div>
    </div>
  );
}

export default Gym;
