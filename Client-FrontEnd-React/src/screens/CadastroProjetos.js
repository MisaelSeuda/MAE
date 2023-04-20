import React from "react";
import "../styles/GlobalStyles.css";

function CadastroProjetoNegocio() {
  return (
    <div className="container">
      <section>
        <h2>Cadastro de projeto/negócio</h2>
        <div className="textbox-container">
          <div className="textbox">
            <label htmlFor="nomeProjeto">Nome do projeto/negócio</label>
            <input type="text" id="nomeProjeto" />
          </div>

          <div className="textbox">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" id="cnpj" />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2>Empreendedores</h2>
        <div className="textbox-container">
          <div className="textbox">
            <label htmlFor="nomeEmpreendedor">Nome</label>
            <input type="text" id="nomeEmpreendedor" />
          </div>

          <div className="textbox">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </div>

          <div className="textbox">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="textbox">
            <label htmlFor="telefone">Telefone (WhatsApp)</label>
            <input type="text" id="telefone" />
          </div>

          <button className="btn">Adicionar mais empreendedores</button>
        </div>
      </section>

      <hr />

      <section>
        <div className="textbox-container">
          <div className="textbox">
            <label htmlFor="nivelMaturidade">Nível de maturidade</label>
            <select id="nivelMaturidade">
              <option value="ideacao">Ideação</option>
              <option value="validacaoProblema">Validação de problema</option>
              <option value="validacaoSolucoes">Validação de soluções</option>
              <option value="mvp">MVP</option>
              <option value="primeiraVenda">Primeira venda</option>
              <option value="vendendo">Vendendo</option>
              <option value="negocioEstruturado">Negócio estruturado</option>
              <option value="negocioParado">Negócio parado</option>
              <option value="negocioEncerrado">Negócio encerrado</option>
            </select>
          </div>
        </div>
      </section>

      <div className="btn-container">
        <button className="btn one">Cancelar</button>
        <button className="btn two">Cadastrar</button>
      </div>
      
    </div>
  );
}

export default CadastroProjetoNegocio;
