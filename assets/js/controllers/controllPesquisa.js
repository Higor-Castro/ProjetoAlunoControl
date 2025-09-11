import {PesquisaModel} from "../model/PesquisaModel.js";
import { AlunoModel } from "../model/AlunoModel.js";
import controllAluno from "./controllAluno.js";

const formAdiciona = document.getElementById("formPesquisa");
let msg = "";


// variavel que chama a função de validação de cpf do controllAluno.js
const validarCpf = controllAluno.validarCpf;

// função para adicionar a Pesquisa em forma de OBJ na lista do PesquisaModel
function adicionarPesquisa (e){
    e.preventDefault();
    // validar o cpf 
    let indexCpf = validarCpf(e);
    // OBJ para adicionar ao PesquisaModel.createPesquisa.
    let addPesquisa = {
        cpf: Number(e.target.cpf.value),
        pergunta1: Number(e.target.navegacao.value),
        pergunta2: Number(e.target.conteudo.value),
        pergunta3: Number(e.target.organizacao.value),
        pergunta4: Number(e.target.suporte.value),
        pergunta5: Number(e.target.desempenho.value)
    };

    // lista para validar os todos campos que vem do pesquisa
    const valores = ["cpf","pergunta1", "pergunta2", "pergunta3", "pergunta4", "pergunta5"];
    //Verrificar se estar faltando algum campo em forma de looping
    for(let campo of valores){
        if(!addPesquisa[campo]){
            msg = `Esta faltando Preencher esta valor: ${campo}`;
            view.visualizarMensagem(msg);
            return; // Sai da função se algum campo estiver faltando
        }
    }
    // Se todos os campos estiverem preenchidos, adiciona a pesquisa
    PesquisaModel.createPesquisa(addPesquisa);
    msg = `Pesquisa do aluno ${AlunoModel.readAluno()[indexCpf].nome} adicionada com sucesso!`;
    alert (msg);
}


formAdiciona.addEventListener("submit", adicionarPesquisa);