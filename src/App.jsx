import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

const App = () => {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    console.log("execuityoas");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  return (
    <div
      id="body"
      className="font-lato bg-dark-blue flex justify-center items-center min-h-screen text-white"
    >
      <div id="container" className="min-w-100 min-h-100 bg-blue p-8 rounded">
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
      </div>
    </div>
  );
};

export default App;
