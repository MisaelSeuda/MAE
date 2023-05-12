import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import CadastroMentorias from "./screens/CadastroMentorias";
import RelatorioAtividades from "./screens/RelatorioAtividades";
import CadastroProjetos from "./screens/CadastroProjetos";
import CadastroMentor from "./screens/CadastroMentor";
import Login from "./screens/Login";
import { Link } from 'react-router-dom';
import CadastroAcompanhamento from "./screens/CadastroAcompanhamento";

function AppWithProSidebar() {
  return (
    <ProSidebarProvider>
      <div style={{ display: 'flex', height: '100%', minHeight: '100px'}}>
        <Sidebar>
          <Menu >
            <MenuItem component={<Link to="/cadastro-mentorias" />}>Cadastro Mentorias</MenuItem>
            <MenuItem component={<Link to="/relatorio-atividades" />}>Relatorio Atividades</MenuItem>
            <MenuItem component={<Link to="/cadastro-projetos" />}>Cadastro Projetos</MenuItem>
            <MenuItem component={<Link to="/cadastro-mentor" />}>Cadastro Mentor</MenuItem>
            <MenuItem component={<Link to="/cadastro-acompanhamento" />}>Cadastro Acompanhamento</MenuItem>
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro-mentorias" element={<CadastroMentorias />} />
          <Route path="/relatorio-atividades" element={<RelatorioAtividades />} />
          <Route path="/cadastro-projetos" element={<CadastroProjetos />} />
          <Route path="/cadastro-mentor" element={<CadastroMentor />} />
          <Route path="/cadastro-acompanhamento" element={<CadastroAcompanhamento />} />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppWithProSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
