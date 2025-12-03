import GenereteArray from "./GenereteArray.js";
// Entidade que armazena o CRUD do Aluno em forma de métodos
export const AlunoModel = {
    // Array onde serão armazenados todos os dados do aluno
    arrAlunos: GenereteArray.getSaveData(),

    // Função que adiciona os dados do aluno na array 'alunos'
    createAluno: function (aluno) {
        this.arrAlunos.push(aluno);
        GenereteArray.setNewData(this.arrAlunos);

    },

    //Função que atualiza as informação do aluno, aparti do indice 
    updateAluno:function(indice, newAluno){
            this.arrAlunos[indice] = newAluno;
           GenereteArray.setNewData(this.arrAlunos);
    },

    // Função que deleta o aluno da array alunos a partir do índice passado como parâmetro
    deleteAluno: function (indice) {
            this.arrAlunos.splice(indice, 1);
           GenereteArray.setNewData(this.arrAlunos);
    },

    // Função que retorna os alunos da array alunos
    readAluno:function (){
        return [...this.arrAlunos];
    },


}

