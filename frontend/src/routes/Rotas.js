import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "../Screens/HomeScreen";

import AddTechnical from "../Screens/AddTechnical";
import ShowTechnicals from "../Screens/ShowTechnicals";
import EditTechnical from "../Screens/EditTechnical";
import DeleteTechnical from "../Screens/DeleteTechnical";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeScreen/>} path="/" exact />
                <Route element={<AddTechnical/>} path="/Adicionar" />
                <Route element={<ShowTechnicals/>} path="/Mostrar" />
                <Route element={<EditTechnical/>} path="/Editar" />
                <Route element={<DeleteTechnical/>} path="/Deletar" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;