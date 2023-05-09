import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/SideBarStyle.css";

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

export default Sidebar;