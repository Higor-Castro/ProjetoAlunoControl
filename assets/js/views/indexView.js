import Controller from"../controllers/controllAluno.js";

const container = document.querySelector('.container');
const main = document.querySelector('.main');
container.addEventListener('click', checkBotao);

// Função para carregar o estilo CSS
function trocarCss(nomeCss) {
  const link = document.getElementById("style");
  link.href = `../../assets/css/${nomeCss}.css`;
}


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
      botao: "Consultar",
      css: "cadastro"
    },
    consultarCadastro: {
      titulo: "Consultar Cadastro",
      acao: Controller.consultarAluno,
      botao: "Buscar",
      css: "cadastro"
    },
    excluirCadastro: {
      titulo: "Excluir Cadastro",
      acao: Controller.deletarAluno,
      botao: "Excluir",
      css: "cadastro"
    },

    //para a Pesquisa
    alterarPesquisa: {
      titulo: "Alterar Pesquisa",
      acao: "alterarPesquisa",
      botao: "Alterar",
      css: "pesquisa"
    },
    consultarPesquisa: {
      titulo: "Consultar Pesquisa",
      acao: "consultarPesquisa",
      botao: "Buscar",
      css: "pesquisa"
    },
    excluirPesquisa: {
      titulo: "Excluir Pesquisa",
      acao: "excluirPesquisa",
      botao: "Excluir",
      css: "pesquisa"
    }

  };
  


  // pega a config da página
  const config = verificadorBotao[botao];
   // troca o CSS
   trocarCss(config.css);
   
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
      title="Digite exatamente 11 números"
      oninput="this.value = this.value.replace(/\\D/g,'')" 
  />
      <button type="submit">${config.botao}</button>
    </form>
  `;

  // adiciona o evento ao formulário
  const formDinamico = document.getElementById("formDinamico");
  formDinamico.addEventListener("submit", config.acao);
}