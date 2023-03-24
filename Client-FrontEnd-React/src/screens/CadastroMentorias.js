import React from "react";
import "./GlobalStyles.css";

function CadastroMentorias() {
  return (
    <div className="container">
      <section>
        <h2>Cadastro de Programas de Mentorias</h2>
        <div className="textbox">
          <label htmlFor="nome-programa">Nome do programa</label>
          <input type="text" id="nome-programa" />
        </div>
        <div className="textbox">
          <label htmlFor="inicio-programa">Início do programa</label>
          <input type="date" id="inicio-programa" />
        </div>
        <div className="textbox">
          <label htmlFor="fim-programa">Fim do programa</label>
          <input type="date" id="fim-programa" />
        </div>
        <div className="textbox">
          <label htmlFor="projetos">Projetos</label>
          <input type="text" id="projetos" />
        </div>
        <div className="textbox">
          <label htmlFor="responsavel">Responsável</label>
          <input type="text" id="responsavel" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Atividades Coletivas</h2>
        <div className="textbox">
          <label htmlFor="atividades-coletivas">
            Possui atividades coletivas?
          </label>
          <select id="atividades-coletivas">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </section>
      <hr />
      <section>
        <h2>Atividades</h2>
        <div className="textbox">
          <label htmlFor="nome-atividade">Nome da atividade</label>
          <input type="text" id="nome-atividade" />
        </div>
        <div className="textbox">
          <label htmlFor="descricao-atividade">Descrição da atividade</label>
          <input type="text" id="descricao-atividade" />
        </div>
        <div className="textbox">
          <label htmlFor="inicio-atividade">Início da atividade</label>
          <input type="date" id="inicio-atividade" />
        </div>
        <div className="textbox">
          <label htmlFor="fim-atividade">Fim da atividade</label>
          <input type="date" id="fim-atividade" />
        </div>
        <div className="textbox">
          <label htmlFor="local-atividade">Local da atividade</label>
          <input type="text" id="local-atividade" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Mentoria</h2>
        <div className="textbox">
          <label htmlFor="nome-mentoria">Nome da mentoria</label>
          <input type="text" id="nome-mentoria" />
        </div>
        <div className="textbox">
          <label htmlFor="inicio-mentoria">Início da mentoria</label>
          <input type="date" id="inicio-mentoria" />
        </div>
        <div className="textbox">
          <label htmlFor="fim-mentoria">Fim da mentoria</label>
          <input type="date" id="fim-mentoria" />
        </div>
        <div className="textbox">
          <label htmlFor="tempo-estimado">Tempo estimado</label>
          <input type="text" id="tempo-estimado" />
        </div>
        <div className="textbox">
          <label htmlFor="mentor">Mentor</label>
          <input type="text" id="mentor" />
        </div>
        <div className="textbox">
          <label htmlFor="local-mentoria">Local da mentoria</label>
          <input type="text" id="local-mentoria" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Entrega de atividade</h2>
        <div className="textbox">
          <label htmlFor="nome-entrega">Nome da entrega de atividade</label>
          <input type="text" id="nome-entrega" />
        </div>
        <div className="textbox">
          <label htmlFor="descricao-entrega">Descrição da entrega</label>
          <input type="text" id="descricao-entrega" />
        </div>
        <div className="textbox">
          <label htmlFor="mentor-solicitante">Mentor solicitante</label>
          <input type="text" id="mentor-solicitante" />
        </div>
        <div className="textbox">
          <label htmlFor="local-entrega">Local da entrega</label>
          <input type="text" id="local-entrega" />
        </div>
        <div className="textbox">
          <label htmlFor="arquivo-entrega">Arquivo</label>
          <input type="file" id="arquivo-entrega" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Tipos de atividades</h2>
        <div className="textbox">
          <label htmlFor="tipos-atividades">
            Selecione o tipo de atividade
          </label>
          <select id="tipos-atividades">
            <option value="oficina">Oficina</option>
            <option value="mentoria">Mentoria</option>
            <option value="evento">Evento</option>
            <option value="entrega">Entrega</option>
          </select>
        </div>
      </section>
      <div className="btn-container">
        <button className="btn one">Cancelar</button>
        <button className="btn two">Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroMentorias;
