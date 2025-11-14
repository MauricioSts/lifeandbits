import { useState } from "react";
import {
  FaGift,
  FaGraduationCap,
  FaHeart,
  FaDollarSign,
  FaStar,
  FaFilter,
  FaPlus,
  FaSuitcase,
  FaRunning,
  FaBook,
} from "react-icons/fa";
import type { NewGoals } from "../../types/Goals";

function Goals() {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const [progressoAtual, setProgressoAtual] = useState(0);
  const [meta, setMeta] = useState(0);
  const [metas, setMetas] = useState<NewGoals[]>([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    // Limpar campos ao fechar
    setTitulo("");
    setCategoria("");
    setRecompensa("");
    setProgressoAtual(0);
    setMeta(0);
  };

  function handleAddMeta() {
    if (!titulo.trim() || !categoria || !recompensa.trim() || !meta) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (meta <= 0) {
      alert("A meta deve ser maior que zero!");
      return;
    }

    const newGoal: NewGoals = {
      titulo: titulo.trim(),
      categoria,
      recompensa: recompensa.trim(),
      progressoAtual: progressoAtual || 0,
      meta: meta,
    };

    setMetas([...metas, newGoal]);
    handleCloseModal();
  }

  return (
    <div
      className="min-vh-100 p-3 p-md-4 p-lg-5"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div
        className="container-fluid px-3 px-md-4"
        style={{ maxWidth: "1400px" }}
      >
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4 mb-md-5">
          <div className="mb-3 mb-md-0">
            <h1
              className="display-5 fw-bold mb-2"
              style={{
                color: "#1a5f3f",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              }}
            >
              Sua Jornada de Conquistas
            </h1>
            <h4 className="h6 fw-normal mb-0" style={{ color: "#4a9d6e" }}>
              Defina seus objetivos, acompanhe seu progresso e celebre suas
              vitórias.
            </h4>
          </div>
          <button
            className="btn d-flex align-items-center gap-2 px-3 px-md-4 py-2 rounded"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            onClick={handleOpenModal}
          >
            <FaPlus />
            <span>Adicionar Nova Meta</span>
          </button>
        </div>

        {/* Tabs Section */}
        <div className="mb-4">
          <ul
            className="nav nav-tabs border-0 mb-3"
            style={{ borderBottom: "2px solid #e0e0e0" }}
          >
            <li className="nav-item">
              <button
                className="nav-link active border-0 pb-3 px-0 me-4"
                style={{
                  color: "#1a5f3f",
                  borderBottom: "3px solid #28a745 !important",
                  fontWeight: "500",
                }}
              >
                Metas Atuais
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link border-0 pb-3 px-0 me-4"
                style={{ color: "#666", fontWeight: "500" }}
              >
                Metas Concluídas
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link border-0 pb-3 px-0"
                style={{ color: "#666", fontWeight: "500" }}
              >
                Recompensas
              </button>
            </li>
          </ul>

          {/* Filter Buttons */}
          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                backgroundColor: "#d4edda",
                border: "none",
              }}
            >
              <FaFilter style={{ color: "#28a745" }} />
              <span style={{ color: "#1a5f3f" }}>Todas</span>
            </button>
            <button
              className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{ border: "1px solid #e0e0e0" }}
            >
              <FaHeart style={{ color: "#28a745" }} />
              <span>Saúde</span>
            </button>
            <button
              className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{ border: "1px solid #e0e0e0" }}
            >
              <FaDollarSign style={{ color: "#ff9800" }} />
              <span>Finanças</span>
            </button>
            <button
              className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{ border: "1px solid #e0e0e0" }}
            >
              <FaGraduationCap style={{ color: "#2196f3" }} />
              <span>Estudos</span>
            </button>
            <button
              className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{ border: "1px solid #e0e0e0" }}
            >
              <FaStar style={{ color: "#ffc107" }} />
              <span>Lazer</span>
            </button>
          </div>
        </div>

        {/* Current Goals Section */}
        <div className="mt-4 mt-md-5">
          <h2 className="display-6 fw-bold mb-4" style={{ color: "#1a5f3f" }}>
            Metas Atuais
          </h2>

          {/* Goals Cards */}
          <div className="row g-3 g-md-4">
          {metas.map((meta, index) => {
            // Determinar ícone e cor baseado na categoria
            let Icon = FaGraduationCap;
            let iconColor = "#2196f3";
            
            if (meta.categoria === "saude") {
              Icon = FaHeart;
              iconColor = "#28a745";
            } else if (meta.categoria === "financas") {
              Icon = FaDollarSign;
              iconColor = "#ff9800";
            } else if (meta.categoria === "estudos") {
              Icon = FaGraduationCap;
              iconColor = "#2196f3";
            } else if (meta.categoria === "lazer") {
              Icon = FaStar;
              iconColor = "#ffc107";
            }

            // Determinar ícone da recompensa
            let RewardIcon = FaGift;
            if (meta.recompensa.toLowerCase().includes("viagem") || meta.recompensa.toLowerCase().includes("argentina")) {
              RewardIcon = FaSuitcase;
            } else if (meta.recompensa.toLowerCase().includes("tênis") || meta.recompensa.toLowerCase().includes("corrida")) {
              RewardIcon = FaRunning;
            } else if (meta.recompensa.toLowerCase().includes("livro")) {
              RewardIcon = FaBook;
            }

            return (
              <div key={`${meta.titulo}-${index}`} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card h-100 shadow-sm p-3 p-md-4"
                  style={{
                    border: "2px solid #d4edda",
                    borderRadius: "12px",
                  }}
                >
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <Icon style={{ fontSize: "1.5rem", color: iconColor }} />
                      <h3 className="h5 fw-semibold mb-0">{meta.titulo}</h3>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="small text-muted">Progresso</span>
                        <span className="small fw-semibold" style={{ color: "#28a745" }}>
                          {meta.progressoAtual} / {meta.meta}
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
                            width: `${Math.min((meta.progressoAtual / meta.meta) * 100, 100)}%`,
                            backgroundColor: "#28a745",
                            borderRadius: "10px",
                          }}
                          aria-valuenow={meta.progressoAtual}
                          aria-valuemin={0}
                          aria-valuemax={meta.meta}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-end mt-1">
                        <span className="small text-muted">
                          {Math.round((meta.progressoAtual / meta.meta) * 100)}%
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center gap-2 p-2 rounded"
                      style={{ backgroundColor: "#d4edda" }}
                    >
                      <RewardIcon style={{ fontSize: "1.25rem", color: "#ffc107" }} />
                      <span className="small" style={{ color: "#1a5f3f" }}>
                        {meta.recompensa}
                      </span>
                    </div>
                    <button
                      className="btn w-100 rounded"
                      style={{
                        backgroundColor: "#d4edda",
                        color: "#1a5f3f",
                        border: "none",
                      }}
                    >
                      Atualizar Progresso
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título da Meta
                </label>
                <input
                  type="text"
                  id="titulo"
                  className="form-control"
                  placeholder="Ex: Aprender Espanhol"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">
                  Categoria
                </label>
                <select
                  id="categoria"
                  className="form-select"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="saude">Saúde</option>
                  <option value="financas">Finanças</option>
                  <option value="estudos">Estudos</option>
                  <option value="lazer">Lazer</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="recompensa" className="form-label">
                  Recompensa
                </label>
                <input
                  type="text"
                  id="recompensa"
                  className="form-control"
                  placeholder="Ex: Viagem para a Argentina"
                  value={recompensa}
                  onChange={(e) => setRecompensa(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="progressoAtual" className="form-label">
                  Progresso Atual
                </label>
                <input
                  type="number"
                  id="progressoAtual"
                  className="form-control"
                  placeholder="0"
                  min="0"
                  value={progressoAtual}
                  onChange={(e) => setProgressoAtual(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="meta" className="form-label">
                  Meta para Alcançar
                </label>
                <input
                  type="number"
                  id="meta"
                  className="form-control"
                  placeholder="Ex: 100"
                  min="1"
                  value={meta}
                  onChange={(e) => setMeta(Number(e.target.value))}
                />
              </div>
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
                onClick={handleAddMeta}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleCloseModal}
        ></div>
      )}
    </div>
  );
}

export default Goals;
