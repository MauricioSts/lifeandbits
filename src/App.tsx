import { useState } from "react";

import "./App.css";
import Heath from "./pages/Health/Health";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Heath />
    </div>
  );
}

export default App;
