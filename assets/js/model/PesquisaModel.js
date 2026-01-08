import Strorage from "../services/GenereteArray.js";
// Entidade que armazena o CRUD da Pesquisa em forma de métodos
export  const PesquisaModel = {
    // Array onde serão amarzedos os dados da Pesquisa
    arrPesquisa: Strorage.get("ArrPesquisa"),

    // função onde vai Amazenar os dados na array pesquisa
    // ela irar fazer o 'C' do CRUD
    createPesquisa: function(dadosPesquisa){
        // Adiciona os dados da pesquisa na array
        this.arrPesquisa.push(dadosPesquisa);
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrPesquisa", this.arrPesquisa);

    },
    // Função que atualiza as informação da Pesquisa, aparti do indice
    // Ela irar fazer o 'U' do CRUD
    updatePesquisa: function (indice,newPesquisa){
        if(this.arrPesquisa[indice]){
            this.arrPesquisa[indice] = newPesquisa;
        }
        else{
            throw new RangeError("Índice inválido");
        }
    },

    // função que deleta a pesquisa da array, apartir do indice
    // Ela irar fazer o 'D' do CRUD
    deletePesquisa: function(indice){
        if(this.arrPesquisa[indice]){
            this.arrPesquisa.splice(indice,1);
        }
        else{
            throw new RangeError("Índice inválido");
        }
    },

    // função que retorna pesquisa da array pesquisa
    // Ela irar fazer o 'R' do CRUD
    readPesquisa: function(){
        return [...this.arrPesquisa];
    }

};

