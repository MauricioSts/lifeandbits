import { useState } from "react";

import "./App.css";
import Heath from "./pages/Health/Health";
import Goals from "./pages/Goals/Goals";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Goals />
    </div>
  );
}

export default App;
