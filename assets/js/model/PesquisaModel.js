import Strorage from "../services/GenereteArray.js";
import CpfService from "../services/CpfServise.js";
// Entidade que armazena o CRUD da Pesquisa em forma de métodos
export  const PesquisaModel = {
    // Array onde serão amarzedos os dados da Pesquisa
    arrPesquisa: Strorage.get("ArrPesquisa"),

    // função onde vai Amazenar os dados na array pesquisa
    // ela irar fazer o 'C' do CRUD
    createPesquisa: function(dadosPesquisa){

        if (CpfService.exists(dadosPesquisa.cpf,this.arrPesquisa)){
            return {
                error: true,
                message: "ERRO  CPF já existe!"
            }
        }
        else{
            // Adiciona os dados da pesquisa na array
            this.arrPesquisa.push(dadosPesquisa);
            // Salva os dados atualizados no armazenamento local
            Strorage.set("ArrPesquisa", this.arrPesquisa);
            return {
                error: false,
                message: " adicionada com sucesso!"
            }
            
        }


    },
    // Função que atualiza as informação da Pesquisa, aparti do indice
    // Ela irar fazer o 'U' do CRUD
    updatePesquisa: function (indice,newPesquisa){
        // Atualiza a pesquisa na array
        this.arrPesquisa[indice] = newPesquisa;
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrPesquisa", this.arrPesquisa);
    },

    // função que deleta a pesquisa da array, apartir do indice
    // Ela irar fazer o 'D' do CRUD
    deletePesquisa: function(indice){
        // Remove a pesquisa da array
        this.arrPesquisa.splice(indice,1);
        // Salva os dados atualizados no armazenamento local
        Strorage.set("ArrPesquisa", this.arrPesquisa);
    },

    // função que retorna pesquisa da array pesquisa
    // Ela irar fazer o 'R' do CRUD
    readPesquisa: function(){
        return [...this.arrPesquisa];
    }
};

