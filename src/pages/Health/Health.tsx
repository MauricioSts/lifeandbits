import Gym from "./components/Gym";
import Water from "./components/Water";

function Heath() {
  return (
    <div className="min-vh-100 p-3 p-md-4 p-lg-5" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-fluid px-3 px-md-4" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-4 mb-md-5">
          <h1 className="h2 h3-md display-4 fw-bold text-dark mb-3 mb-md-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Painel de Saúde e Bem-estar
          </h1>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button className="btn px-3 px-md-4 py-2 rounded" style={{ backgroundColor: '#d4edda', color: '#333', border: 'none', fontSize: '0.9rem' }}>
              Hoje
            </button>
            <button className="btn px-3 px-md-4 py-2 rounded" style={{ backgroundColor: '#e9ecef', color: '#333', border: 'none', fontSize: '0.9rem' }}>
              Esta semana
            </button>
            <button className="btn px-3 px-md-4 py-2 rounded" style={{ backgroundColor: '#e9ecef', color: '#333', border: 'none', fontSize: '0.9rem' }}>
              Este mês
            </button>
          </div>
        </div>
        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-6">
            <Gym />
          </div>
          <div className="col-12 col-md-6">
            <Water />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heath;
