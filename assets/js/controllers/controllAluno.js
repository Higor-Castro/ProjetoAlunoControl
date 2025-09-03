import {AlunoModel} from "../model/AlunoModel.js";

const formAdiciona = document.getElementById("formAluno");
let msg = "";

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
            return  alert(msg)
        }
    }

    AlunoModel.createAluno(addAluno);
    msg = `${addAluno.nome} Adicionado com Sucesso!!` ;
    alert(msg)
};

// Função que altera os valores do Aluno, a partir do cpf do Aluno
function alterarAluno (e){
    e.preventDefault();
    let validarCpf = Number(e.target.cpf.value);
    let indexCpf = AlunoModel.readAluno().findIndex(aluno => aluno.cpf === validarCpf);
    // Verifica se o aluno existe
    if(indexCpf === -1){
        msg = `Aluno não encontrado!`;
        return alert(msg);
    }
    // Se o aluno existir, cria um novo objeto com os dados atualizados
    else{
        let newAluno = {
            nome: 'higor',
            email: 'server@gmail.com',
            senha: 'higor0304343',
            telefone:11911111111
        };
        AlunoModel.updateAluno(indexCpf, newAluno);
        msg = `Aluno ${newAluno.nome} alterado com sucesso!`;
        alert(msg);
    }

}
//Exporta a função alterarAluno para ser usada em outros módulos
export default { alterarAluno };

// Eventos teste
if (formAdiciona) {
  formAdiciona.addEventListener("submit", adicionarAluno);
}