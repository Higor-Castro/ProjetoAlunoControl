import {AlunoModel} from "../model/AlunoModel.js";
// Serviço para validação de CPF
const CpfService = {
    exists(cpf, array) {
        return array.some(a => a.cpf === cpf);
    },
    findCpf(cpf){
        cpf = Number(cpf);
        return AlunoModel.readAluno().findIndex(aluno => aluno.cpf === cpf);
    }
};

export default CpfService;