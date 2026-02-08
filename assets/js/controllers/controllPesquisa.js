import {PesquisaModel} from "../model/PesquisaModel.js";
import { AlunoModel } from "../model/AlunoModel.js";
import controllAluno from "./controllAluno.js";
import { visualizarMensagem } from "../views/ViewMensagem.js";
import viewPesq from "../views/ViewPesquisa.js";

const formAdiciona = document.getElementById("formPesquisa");
let msg = "";


// variavel que chama a função de validação de cpf do controllAluno.js
const validarCpf = controllAluno.validarCpf;


// função para adicionar a Pesquisa em forma de OBJ na lista do PesquisaModel
function adicionarPesquisa (e){
    e.preventDefault();
    // validar o cpf 
    let indexCpf = validarCpf(Number(e.target.cpf.value));
    // OBJ para adicionar ao PesquisaModel.createPesquisa.
    let addPesquisa = {
        cpf: Number(e.target.cpf.value),
        pergunta1: Number(e.target.navegacao.value),
        pergunta2: Number(e.target.conteudo.value),
        pergunta3: Number(e.target.organizacao.value),
        pergunta4: Number(e.target.suporte.value),
        pergunta5: Number(e.target.desempenho.value)
    };

    //  adiciona a pesquisa
    let result = PesquisaModel.createPesquisa(addPesquisa);
    
    // Verifica se houve um erro ao adicionar a pesquisa
    if(result.error){
        visualizarMensagem(result.message);
        return;
    }
    // Exibe uma mensagem de sucesso
    msg = `Pesquisa do aluno ${AlunoModel.readAluno()[indexCpf].nome} adicionada com sucesso!`;
    visualizarMensagem (msg);
}

function alterarPesquisa (e){
    e.preventDefault();
    // validar o cpf
    let indexCpf = validarCpf(Number(e.target.cpf.value));

    // chama a função para visualizar o formulário de atualização
    const viewUpdatePesquisa = viewPesq.visualizarAtualizacaoPesquisa;
    // mostra o formulário com os dados do aluno a ser atualizado
    viewUpdatePesquisa(PesquisaModel.readPesquisa()[indexCpf]);

    // faz a atualização da pesquisa
    const formUpdatePesquisa = document.getElementById("formPesquisa");
    formUpdatePesquisa.addEventListener("submit", function(e){
        e.preventDefault();
        let newPesquisa = {
            cpf: Number(e.target.cpf.value),
            pergunta1: Number(e.target.navegacao.value),
            pergunta2: Number(e.target.conteudo.value),
            pergunta3: Number(e.target.organizacao.value),
            pergunta4: Number(e.target.suporte.value),
            pergunta5: Number(e.target.desempenho.value)
        };
        PesquisaModel.updatePesquisa(indexCpf, newPesquisa);
        msg = `Pesquisa do aluno ${AlunoModel.readAluno()[indexCpf].cpf} atualizada com sucesso!`;
        visualizarMensagem(msg);
    });

}

function consultarPesquisa (e){
    e.preventDefault();
    // validar o cpf
    let indexCpf = validarCpf(Number(e.target.cpf.value));
    // chama a função para visualizar a pesquisa do aluno
    const viewPesquisa = viewPesq.visualizarPesquisa;
    viewPesquisa(PesquisaModel.readPesquisa()[indexCpf]);

}

function excluirPesquisa (e){
    e.preventDefault();
    // validar o cpf
    let indexCpf = validarCpf(Number(e.target.cpf.value));  
    // chama a função para excluir a pesquisa do aluno
    PesquisaModel.deletePesquisa(indexCpf);
    msg = `Pesquisa do aluno ${AlunoModel.readAluno()[indexCpf].cpf} excluída com sucesso!`;
    visualizarMensagem(msg);
}

export default {
    alterarPesquisa,
    consultarPesquisa,
    excluirPesquisa
};

if(formAdiciona){
formAdiciona.addEventListener("submit", adicionarPesquisa);
}