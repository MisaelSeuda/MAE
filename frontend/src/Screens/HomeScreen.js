import React from 'react'
import { Link } from "react-router-dom";

import "../css/style.css";


const HomeScreen = () => {
	return (
			<nav className='top-bar'>
				<div className="logo-title">
					<Link to="/">Mercado de Serviços</Link>
				</div>

				<div className='table-routes'>
					<li>
						<Link to="/Adicionar">Adicionar</Link>
					</li>
					<li>
						<Link to="/Mostrar">Mostrar</Link>
					</li>
					<li>
						<Link to="/Editar">Editar</Link>
					</li>
					<li>
						<Link to="/Deletar">deletar</Link>
					</li>
				</div>

			</nav>
	)
}

export default HomeScreen;