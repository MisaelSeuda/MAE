import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CadastroMentorias from "./screens/CadastroMentorias";
import RelatorioAtividades from "./screens/RelatorioAtividades";
import CadastroProjetos from "./screens/CadastroProjetos";
import CadastroMentor from "./screens/CadastroMentor";
import CadastroAcompanhamento from "./screens/CadastroAcompanhamento";
import Login from "./screens/Login";
import Sidebar from "../src/components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
}

function PrivateRoutes() {
  // verificando se a página atual é a de login
  const isLoginPage = window.location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Sidebar />} {/*renderizando a Sidebar somente se não estiver na página de login*/}
      <Routes>
        <Route path='/cadastro-mentorias' element={<CadastroMentorias />} />
        <Route path="/relatorio-atividades" element={<RelatorioAtividades />} />
        <Route path="/cadastro-projetos" element={<CadastroProjetos />} />
        <Route path="/cadastro-mentor" element={<CadastroMentor />} />
        <Route path="/cadastro-acompanhamento" element={<CadastroAcompanhamento />} />
        {/* adicione outras rotas privadas aqui */}
      </Routes>
    </>
  );
}

export default App;
