// Entidade que armazena o CRUD do Aluno em forma de métodos
export const AlunoModel = {
    // Array onde serão armazenados todos os dados do aluno
    arrAlunos: [],

    // Função que adiciona os dados do aluno na array 'alunos'
    createAluno: function (aluno) {
        // lista para validar os todos campos que vem do aluno
        const valores = ["nome", "cpf", "email", "senha", "telefone"];
        //Verrificar se estar faltando algum campo em forma de looping
        for(let campo of valores){
            if(!aluno[campo]){
                throw new RangeError(`Esta faltando Preencher esta valor:`+ campo);
            }
        }
        this.arrAlunos.push(aluno);
        



    },

    //Função que atualiza as informação do aluno, aparti do indice 
    updateAluno:function(indice, newAluno){
        if (this.arrAlunos[indice]){
            this.arrAlunos[indice] = newAluno;
        }
       else{
            throw new RangeError("Índice inválido");
       }

        
    },

    // Função que deleta o aluno da array alunos a partir do índice passado como parâmetro
    deleteAluno: function (indice) {
       if (this.arrAlunos[indice]){
            this.arrAlunos.splice(indice, 1);
       }
       else{
            throw new RangeError("Índice inválido");
       }
        
    },

    // Função que retorna os alunos da array alunos
    readAluno:function (){
        return [...this.arrAlunos];
    },


}

