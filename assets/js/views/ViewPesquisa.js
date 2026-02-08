const main = document.querySelector('.main');

// função para visualizar e altear a página de Pesquisa
function visualizarAtualizacaoPesquisa(pesquisa) {
    main.innerHTML = `
    <section class="indice">
      <h2>Escala de Satisfação</h2>
      <ul>
        <li>1: 😠 Muito Insatisfeito</li>
        <li>2: 🙁 Pouco Insatisfeito</li>
        <li>3: 😐 Neutro</li>
        <li>4: 🙂 Pouco Satisfeito</li>
        <li>5: 😍 Muito Satisfeito</li>
      </ul>
    </section>

    <!-- FORMULÁRIO -->
    <section class="container">
      <h2>Pesquisa de Satisfação</h2>

      <form id="formPesquisa" method="post">

        <!-- IDENTIFICAÇÃO -->
        <fieldset>
          <legend>Identificação do Aluno</legend>
          <input
            type="text"
            name="cpf"
            value="${pesquisa.cpf}"
            class="inputCPF"
            placeholder="Digite seu CPF"
            required
            maxlength="11"
            pattern="\d{11}"
            title="Digite exatamente 11 dígitos"
            readonly
          >
        </fieldset>

        <!-- PERGUNTA 1 -->
        <fieldset>
          <legend>1) Facilidade de navegação na plataforma</legend>
          <label><input type="radio" name="navegacao" value="1" required>1</label>
          <label><input type="radio" name="navegacao" value="2"> 2</label>
          <label><input type="radio" name="navegacao" value="3"> 3</label>
          <label><input type="radio" name="navegacao" value="4"> 4</label>
          <label><input type="radio" name="navegacao" value="5"> 5</label>
        </fieldset>

        <!-- PERGUNTA 2 -->
        <fieldset>
          <legend>2) Relevância do conteúdo apresentado</legend>
          <label><input type="radio" name="conteudo" value="1" required> 1</label>
          <label><input type="radio" name="conteudo" value="2"> 2</label>
          <label><input type="radio" name="conteudo" value="3"> 3</label>
          <label><input type="radio" name="conteudo" value="4"> 4</label>
          <label><input type="radio" name="conteudo" value="5"> 5</label>
        </fieldset>

        <!-- PERGUNTA 3 -->
        <fieldset>
          <legend>3) Organização e clareza dos materiais</legend>
          <label><input type="radio" name="organizacao" value="1" required> 1</label>
          <label><input type="radio" name="organizacao" value="2"> 2</label>
          <label><input type="radio" name="organizacao" value="3"> 3</label>
          <label><input type="radio" name="organizacao" value="4"> 4</label>
          <label><input type="radio" name="organizacao" value="5"> 5</label>
        </fieldset>

        <!-- PERGUNTA 4 -->
        <fieldset>
          <legend>4) Qualidade do suporte ao aluno</legend>
          <label><input type="radio" name="suporte" value="1" required> 1</label>
          <label><input type="radio" name="suporte" value="2"> 2</label>
          <label><input type="radio" name="suporte" value="3"> 3</label>
          <label><input type="radio" name="suporte" value="4"> 4</label>
          <label><input type="radio" name="suporte" value="5"> 5</label>
        </fieldset>

        <!-- PERGUNTA 5 -->
        <fieldset>
          <legend>5) Impacto no desempenho acadêmico</legend>
          <label><input type="radio" name="desempenho" value="1" required> 1</label>
          <label><input type="radio" name="desempenho" value="2"> 2</label>
          <label><input type="radio" name="desempenho" value="3"> 3</label>
          <label><input type="radio" name="desempenho" value="4"> 4</label>
          <label><input type="radio" name="desempenho" value="5"> 5</label>
        </fieldset>

        <button type="submit" class="butPesquisa">
          Enviar Pesquisa
        </button>

      </form>
    </section>

    `;
const mapa = {
  pergunta1: "navegacao",
  pergunta2: "conteudo",
  pergunta3: "organizacao",
  pergunta4: "suporte",
  pergunta5: "desempenho"
};

Object.entries(mapa).forEach(([pergunta, nameInput]) => {
  const valor = pesquisa[pergunta];

  const radio = document.querySelector(
    `input[name="${nameInput}"][value="${valor}"]`
  );

  if (radio) radio.checked = true;
});

 
}

function visualizarPesquisa(pesquisa) {
  main.innerHTML = `
    <section class="indice">
      <h2>Escala de Satisfação</h2>
      <ul>
        <li>1 😠 Muito Insatisfeito</li>
        <li>2 🙁 Pouco Insatisfeito</li>
        <li>3 😐 Neutro</li>
        <li>4 🙂 Pouco Satisfeito</li>
        <li>5 😍 Muito Satisfeito</li>
      </ul>
    </section>

    <section class="container">
      <h2>Resultado da Pesquisa</h2>

      <fieldset>
        <legend>Facilidade de navegação na plataforma</legend>
        <p class="resultado">${pesquisa.pergunta1}</p>
      </fieldset>

      <fieldset>
        <legend>Relevância do conteúdo apresentado</legend>
        <p class="resultado"> ${pesquisa.pergunta2}</p>
      </fieldset>

      <fieldset>
        <legend>Organização e clareza dos materiais</legend>
        <p class="resultado"> ${pesquisa.pergunta3}</p>
      </fieldset>

      <fieldset>
        <legend>Qualidade do suporte ao aluno</legend>
        <p class="resultado"> ${pesquisa.pergunta4}</p>
      </fieldset>

      <fieldset>
        <legend>Impacto no desempenho acadêmico</legend>
        <p class="resultado"> ${pesquisa.pergunta5}</p>
      </fieldset>
    </section>
  `;
}


export default {visualizarAtualizacaoPesquisa, visualizarPesquisa};