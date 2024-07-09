import React from "react";
import Apresentacao from "./components/Apresentacao";
import Box from "./components/Box";
import "./css/styles.css";

function App() {
  return (
    <>
      <Apresentacao />
      <div className="container">
        <Box texto="PLANO DE DESENVOLVIMENTO INSTITUCIONAL" />
        <Box texto="PESQUISA PÚBLICA PROCESSOS IFTM" />
        <Box texto="LICITAÇÕES E CONTRATOS" />
        <Box texto="RECEITAS E DESPESAS" />
        <Box texto="DADOS ABERTOS" />
        <Box texto="TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS" />
        <Box texto="SERVIDORES" />
        <Box texto="PERGUNTAS FREQUENTES" />
      </div>
    </>
  );
}

export default App;
