import { React, useState } from "react";
import "../styles/GlobalStyles.css";

function CadastroMentorias() {
  const [programaChecked, setProgramaChecked] = useState(false);
  const [personalizadoChecked, setPersonalizadoChecked] = useState(false);

  const handleProgramaChange = (event) => {
    setProgramaChecked(event.target.checked);
  };

  const handlePersonalizadoChange = (event) => {
    setPersonalizadoChecked(event.target.checked);
  };
  return (
    <div className="container">
      <section>
        <h2>Cadastro de acompanhamento</h2>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={programaChecked}
              onChange={handleProgramaChange}
            />
            Programa
          </label>
          <label>
            <input
              type="checkbox"
              checked={personalizadoChecked}
              onChange={handlePersonalizadoChange}
            />
            Personalizado
          </label>
        </div>
      </section>
      <hr />
      <section>
        <h2>Projeto Negócio</h2>
        <div className="textbox">
          <label htmlFor="nomeProjeto">Nome do projeto/negócio</label>
          <input type="text" id="nomeProjeto" />
        </div>
        <div className="textbox">
          <label htmlFor="responsavel-relato">Responsável</label>
          <input type="text" id="responsavel-relato" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Mentoria</h2>
        <div className="textbox">
          <label htmlFor="nome-mentoria">Mentor</label>
          <input type="text" id="nome-mentor" />
        </div>
        <div className="textbox">
          <label htmlFor="fim-mentoria">Demanda</label>
          <input type="text" id="quantidade-semanda" />
        </div>
        <div className="textbox">
          <label htmlFor="mentor">Data e Hora</label>
          <input type="datetime-local" id="mentor" />
        </div>
        <div className="textbox">
          <label htmlFor="local-mentoria">Duração</label>
          <input type="text" id="quantidade-tempo" />
        </div>
        <div className="textbox">
          <label htmlFor="local-mentoria">Local</label>
          <input type="text" id="local-mentoria" />
        </div>
      </section>
      <div className="btn-container">
        <button className="btn one">Cancelar</button>
        <button className="btn two">Cadastrar</button>
      </div>
    </div >
  );
}

export default CadastroMentorias;
