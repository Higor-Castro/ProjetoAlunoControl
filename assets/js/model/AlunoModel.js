import Strorage from "../services/GenereteArray.js";
// Entidade que armazena o CRUD do Aluno em forma de métodos
export const AlunoModel = {
    // Array onde serão armazenados todos os dados do aluno
    arrAlunos: Strorage.get("ArrAlunos"),

    // Função que adiciona os dados do aluno na array 'alunos'
    createAluno: function (aluno) {
        // Adiciona o aluno na array 
        this.arrAlunos.push(aluno);
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrAlunos", this.arrAlunos);

    },

    //Função que atualiza as informação do aluno, aparti do indice 
    updateAluno:function(indice, newAluno){
        // Atualiza o aluno na array
        this.arrAlunos[indice] = newAluno;
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrAlunos", this.arrAlunos);
    },

    // Função que deleta o aluno da array alunos a partir do índice passado como parâmetro
    deleteAluno: function (indice) {
        // Remove o aluno da array
        this.arrAlunos.splice(indice, 1);
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrAlunos", this.arrAlunos);
    },

    // Função que retorna os alunos da array alunos
    readAluno:function (){
        return [...this.arrAlunos];
    },


}

