import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CadastroMentorias from "./screens/CadastroMentorias";
import RelatorioAtividades from "./screens/RelatorioAtividades";
import CadastroProjetos from "./screens/CadastroProjetos";
import CadastroMentor from "./screens/CadastroMentor";
import CadastroAcompanhamento from "./screens/CadastroAcompanhamento"
import Login from "./screens/Login"
import "../src/styles/App.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span>&#9776;</span>
      </button>

      <nav style={{ transform: `translateX(${isOpen ? 0 : "-100%"})` }}>
        <ul>
          <li>
            <NavLink to="/cadastro-mentorias" activeClassName="active">Cadastro de Mentorias</NavLink>
          </li>
          <li>
            <NavLink to="/relatorio-atividades" activeClassName="active">Relatório de Atividades</NavLink>
          </li>
          <li>
            <NavLink to="/cadastro-projetos" activeClassName="active">Cadastro de Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/cadastro-mentor" activeClassName="active">Cadastro de Mentor</NavLink>
          </li>
          <li>
            <NavLink to="/cadastro-acompanhamento" activeClassName="active">Cadastro de Acompanhamento</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

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
