import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroMentorias from "./screens/CadastroMentorias";
import RelatorioAtividades from "./screens/RelatorioAtividades";
import CadastroProjetos from "./screens/CadastroProjetos";
import CadastroMentor from "./screens/CadastroMentor";
import CadastroAcompanhamento from "./screens/CadastroAcompanhamento"
import Login from "./screens/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cadastro-mentorias' element={<CadastroMentorias />} />
        <Route path="/relatorio-atividades" element={<RelatorioAtividades />} />
        <Route path="/cadastro-projetos" element={<CadastroProjetos />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/cadastro-acompanhamento" element={<CadastroAcompanhamento />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
