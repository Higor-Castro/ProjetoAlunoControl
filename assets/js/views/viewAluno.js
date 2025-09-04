import Controller from"../controllers/controllAluno.js";

const container = document.querySelector('.container');
const main = document.querySelector('.main');
container.addEventListener('click', checkBotao);

//função que mostra qual botão foi clicado pegando id dele
function checkBotao(e){
  const botaoId = e.target.id;
  mostrarBotao(botaoId);
}


// função que mostra a página correspondente ao botão clicado
function mostrarBotao(botao) {

  // mapa com as opções
  const verificadorBotao = {

    // para o Aluno
    alterarCadastro: {
      titulo: "Alterar Cadastro",
      acao: Controller.alterarAluno,
      botao: "Consultar"
    },
    consultarCadastro: {
      titulo: "Consultar Cadastro",
      acao: Controller.consultarAluno,
      botao: "Buscar"
    },
    excluirCadastro: {
      titulo: "Excluir Cadastro",
      acao: Controller.excluirAluno,
      botao: "Excluir"
    },

    //para a Pesquisa
    alterarPesquisa: {
      titulo: "Alterar Pesquisa",
      acao: alterarPesquisa,
      botao: "Alterar"
    },
    consultarPesquisa: {
      titulo: "Consultar Pesquisa",
      acao: consultarPesquisa,
      botao: "Buscar"
    },
    excluirPesquisa: {
      titulo: "Excluir Pesquisa",
      acao: "excluirPesquisa",
      botao: "Excluir"
    }

  };

  // pega a config da página
  const config = verificadorBotao[botao];


  // gera HTML dinamicamente
  main.innerHTML = `
    <h1>${config.titulo}</h1>
    <form id="formDinamico">
      <input 
        type="text" 
        name="cpf" 
        placeholder="Digite CPF" 
        required 
        maxlength="11" 
        pattern="\\d{11}" 
        title="Digite exatamente 11 dígitos"
      >
      <button type="submit">${config.botao}</button>
    </form>
  `;

  // adiciona o evento ao formulário
  const formDinamico = document.getElementById("formDinamico");
  formDinamico.addEventListener("submit", config.acao);
}

// Função para visualizar a atualização do cadastro do aluno
function visualizarAtualizacaoAluno(aluno) {
  main.innerHTML = `
    <h1>Atualizar Cadastro</h1>
    <form id="formAtualizarAluno">
      <input type="text" name="nome" value="${aluno.nome}" required placeholder="Nome Completo">
      <input type="text" name="cpf" value="${aluno.cpf}" required placeholder="CPF" maxlength="11" pattern="\\d{11}" title="Digite exatamente 11 dígitos" readonly>
      <input type="text" name="telefone" value="${aluno.telefone}" required placeholder="Telefone">
      <input type="email" name="email" value="${aluno.email}" required placeholder="Email">
      <input type="password" name="senha" value="${aluno.senha}" required placeholder="Senha">
      <button type="submit">Atualizar</button>
    </form>
  `;}

  // fução para visualizar as mensa
function visualizarMensagem(mensagem) {
  main.innerHTML = `
    <h1>Resultado</h1>
    <p>${mensagem}</p>
  `;
}



// Exporta as funções para serem usadas em outros módulos
export default {visualizarMensagem, visualizarAtualizacaoAluno};