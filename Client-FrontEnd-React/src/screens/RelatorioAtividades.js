import React from 'react';
import "../styles/GlobalStyles.css";

function RelatorioAtividades() {
    return (
        <div className="container">
            <section>
                <h2>Relatório de Atividades</h2>
                <div className="textbox-container">
                    <div className="textbox">
                        <label htmlFor="nome-atividade">Nome da Atividade</label>
                        <input type="text" id="nome-atividade" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="descricao-atividade">Descrição</label>
                        <textarea id="descricao-atividade" rows="3"></textarea>
                    </div>
                    <div className="textbox">
                        <label htmlFor="inicio-atividade">Início</label>
                        <input type="date" id="inicio-atividade" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="fim-atividade">Fim</label>
                        <input type="date" id="fim-atividade" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="responsavel-atividade">Responsável</label>
                        <input type="text" id="responsavel-atividade" />
                    </div>
                </div>
            </section>

            <hr />

            <section>
                <h2>Detalhes do Relato</h2>
                <div className="textbox-container">
                    <div className="textbox">
                        <label htmlFor="hora-inicio">Hora de Início</label>
                        <input type="time" id="hora-inicio" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="hora-fim">Hora de Fim</label>
                        <input type="time" id="hora-fim" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="responsavel-relato">Responsável</label>
                        <input type="text" id="responsavel-relato" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="relato">Relato</label>
                        <textarea id="relato" rows="3"></textarea>
                    </div>
                    <div className="textbox">
                        <label htmlFor="evidencia">Evidência em Arquivo</label>
                        <input type="file" id="evidencia" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="observacoes">Observações para o Gestor</label>
                        <textarea id="observacoes" rows="3"></textarea>
                    </div>
                </div>
            </section>

            <hr />

            <section>
                <h2>Detalhes da Evidência</h2>
                <div className="textbox-container">
                    <div className="textbox">
                        <label htmlFor="hora-inicio-evidencia">Hora de Início</label>
                        <input type="time" id="hora-inicio-evidencia" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="hora-fim-evidencia">Hora de Fim</label>
                        <input type="time" id="hora-fim-evidencia" />
                    </div>
                    <div className="textbox">
                        <label htmlFor="evidencia2">Evidência em Arquivo</label>
                        <input type="file" id="evidencia-detalhe" />
                    </div>
                </div>
            </section>

            <div className="btn-container">
                <button className="btn one">Cancelar</button>
                <button className="btn two">Enviar</button>
            </div>

        </div>
    );
}

export default RelatorioAtividades;