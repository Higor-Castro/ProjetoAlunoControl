import {PesquisaModel} from "../model/PesquisaModel.js";
import { AlunoModel } from "../model/AlunoModel.js";
import controllAluno from "./controllAluno.js";
import { visualizarMensagem } from "../views/ViewMensagem.js";

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
    // Verifica se o CPF é válido
    if(indexCpf === -1){
        return;
    }
    // Se todos os campos estiverem preenchidos, adiciona a pesquisa
    PesquisaModel.createPesquisa(addPesquisa);
    msg = `Pesquisa do aluno ${AlunoModel.readAluno()[indexCpf].nome} adicionada com sucesso!`;
    visualizarMensagem (msg);
}


formAdiciona.addEventListener("submit", adicionarPesquisa);