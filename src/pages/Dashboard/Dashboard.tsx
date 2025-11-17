import FinanceCard from "./components/FinanceCard";
import StudiesCard from "./components/StudiesCard";
import HealthCard from "./components/HealthCard";

function Dashboard() {
  const dataAtual = new Date().toDateString();

  return (
    <div>
      <h1>Olá, Maurício </h1>
      <p>{dataAtual}</p>
      <div>
        <h2>Visão geral</h2>
        <div>
          <HealthCard />
          <FinanceCard />
          <StudiesCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
