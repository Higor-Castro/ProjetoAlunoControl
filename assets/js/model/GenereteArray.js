// Função para pegar os dados salvos no localStorage
 function getSaveData(){
        let arrData = localStorage.getItem("ArrAlunos")
        arrData = JSON.parse(arrData)
        return arrData && arrData.length ? arrData : [
        {
            cpf: 12345678901,
            nome: 'higor',
            email: 'server@gmail.com',
            senha: 'higor0304343',
            telefone: 11911111111
        }
    ]

    }

// Função para salvar os dados no localStorage
function setNewData(arrAlunos){
        localStorage.setItem("ArrAlunos", JSON.stringify(arrAlunos));
    }


export default {getSaveData, setNewData};