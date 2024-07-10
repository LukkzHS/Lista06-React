import React from "react";
import Apresentacao from "./components/Apresentacao";
import Box from "./components/Box";
import "./css/styles.css";


const boxTexts = [
  "PLANO DE DESENVOLVIMENTO INSTITUCIONAL",
  "PESQUISA PÚBLICA PROCESSOS IFTM",
  "LICITAÇÕES E CONTRATOS",
  "RECEITAS E DESPESAS",
  "DADOS ABERTOS",
  "TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS",
  "SERVIDORES",
  "PERGUNTAS FREQUENTES",
];

function App() {
  return (<>
    <Apresentacao />
    <div className="container">
      {}
      {boxTexts.map((texto, index) => (
        <Box key={index} texto={texto} />
      ))}
    </div>
    </>
  );
}

export default App;