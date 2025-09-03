import Controller from"../controllers/controllAluno.js";

const container = document.querySelector('.container');
const main = document.querySelector('.main');
container.addEventListener('click', mostrarBotao);

//função que mostra qual botão foi clicado pegando id dele
function mostrarBotao(e){
  const botaoId = e.target.id;
  mostrar(botaoId);
}


// função que mostra a página correspondente ao botão clicado
function mostrar(pagina) {

  // mapa com as opções
  const paginas = {

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
  const config = paginas[pagina];


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
