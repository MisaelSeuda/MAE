import React from "react";
import "./GlobalStyles.css";

function CadastroMentor() {
  return (
    <div className="container">

      <section>
        <h2>Cadastro de Mentor</h2>
        <div className="textbox">
          <label>Nome do mentor</label>
          <input type="text" placeholder="Insira o nome do mentor" />
        </div>
        <div className="textbox">
          <label>CPF</label>
          <input type="text" placeholder="Insira o CPF do mentor" />
        </div>
        <div className="textbox">
          <label>Email</label>
          <input type="text" placeholder="Insira o email do mentor" />
        </div>
        <div className="textbox">
          <label>Telefone (WhatsApp)</label>
          <input type="text" placeholder="Insira o telefone do mentor" />
        </div>
      </section>

      <section>
        <div className="textbox">
          <label>Área mentoria</label>
          <select>
            <option value="">Selecione uma opção</option>
            <option value="financas">Finanças/Contábil</option>
            <option value="marketing">Marketing/Vendas</option>
            <option value="gestao">Gestão</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="empreendedor">Perfil Empreendedor</option>
            <option value="juridico">Jurídico</option>
            <option value="investimento">Investimento/Edital/Subversão</option>
            <option value="mercado">Mercado</option>
          </select>
        </div>
        <div className="textbox">
          <label>Nível de projeto/negócio</label>
          <select>
            <option value="">Selecione uma opção</option>
            <option value="ideacao">Ideação</option>
            <option value="validacao">Validação</option>
            <option value="mvp">MVP</option>
            <option value="tracao">Tração</option>
            <option value="escala">Escala</option>
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

export default CadastroMentor;