import {AlunoModel} from "../model/AlunoModel.js";
import view from  "../views/viewAluno.js";


const formAdiciona = document.getElementById("formAluno");
let msg = "";

// Função validadora de CPF que retorna o index do CPF 
function validarCpf(e) {
    let validarCpf = Number(e.target.cpf.value);
    let indexCpf = AlunoModel.readAluno().findIndex(aluno => aluno.cpf === validarCpf);
    // Verifica se o aluno existe
    if(indexCpf === -1){
        msg = `Aluno não encontrado!`;
        view.visualizarMensagem(msg);
    }
    return indexCpf;

}

// Adicionar o Aluno em forma de OBJ na lista do AlunoModel
function adicionarAluno (e){
    e.preventDefault();
    //OBJ para adicionar ao AlunoModel.createAluno.
    let addAluno = {
        nome: e.target.nome.value,
        cpf: Number(e.target.cpf.value),
        email: e.target.email.value,
        senha: e.target.senha.value,
        telefone: Number(e.target.telefone.value)
    };

    // lista para validar os todos campos que vem do aluno
    const valores = ["nome", "cpf", "email", "senha", "telefone"];
    //Verrificar se estar faltando algum campo em forma de looping
    for(let campo of valores){
        if(!addAluno[campo]){
            msg = `Esta faltando Preencher esta valor: ${campo}`;
            view.visualizarMensagem(msg);
        }
    }

    AlunoModel.createAluno(addAluno);
    msg = `${addAluno.nome} Adicionado com Sucesso!!` ;
    view.visualizarMensagem(msg);
};

// Função que altera os valores do Aluno, a partir do cpf do Aluno
function alterarAluno (e){
    e.preventDefault();
    // chamar a função que valida o cpf e retorna o index do cpf
    let indexCpf = validarCpf(e);

    // chama a função para visualizar o formulário de atualização
    const viewUpdateAluno = view.visualizarAtualizacaoAluno;
    // mostra o formulário com os dados do aluno a ser atualizado
    viewUpdateAluno(AlunoModel.readAluno()[indexCpf]);
    
    //faz a atualização quando o formulário for enviado
    const formAtualizarAluno = document.getElementById("formAtualizarAluno");
    formAtualizarAluno.addEventListener("submit", (e) => {
        e.preventDefault();
        let newAluno = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            senha: e.target.senha.value,
            telefone: Number(e.target.telefone.value)
        };
        AlunoModel.updateAluno(indexCpf, newAluno);
        msg = `Aluno ${newAluno.nome} alterado com sucesso!`;
    view.visualizarMensagem(msg);
    });
    }

// Função para deletar o Aluno a partir do cpf
function deletarAluno (e){
    e.preventDefault();
    // chamar a função que valida o cpf e retorna o index do cpf
    let indexCpf = validarCpf(e);

    msg = `Aluno ${AlunoModel.readAluno()[indexCpf].nome} deletado com sucesso!`;
    view.visualizarMensagem(msg);
    AlunoModel.deleteAluno(indexCpf);

}

// função para consultar o Aluno a partir do cpf
function consultarAluno (e){
    e.preventDefault();
    // chamar a função que valida o cpf e retorna o index do cpf
    let indexCpf = validarCpf(e);

    // mostra os dados do aluno encontrado
    const aluno = AlunoModel.readAluno()[indexCpf];

    // chama a função para visualizar os dados do aluno
    view.visualizarAluno(aluno);

}



//Exporta a função alterarAluno para ser usada em outros módulos
export default { alterarAluno, deletarAluno, consultarAluno };

// Adiciona o evento de submit ao formulário de adicionar aluno
if (formAdiciona) {
  formAdiciona.addEventListener("submit", adicionarAluno);
}