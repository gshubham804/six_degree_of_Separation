import "./App.css";
import Graph from "./Component/Graph";
import Input from "./Component/Input";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Input setData={setData} />
      <Graph data={data} />
    </>
  );
}

export default App;
