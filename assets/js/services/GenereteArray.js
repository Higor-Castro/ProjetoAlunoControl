// Módulo para manipulação do localStorage
const Strorage = {
    // fubção para obter os dados salvos no localStorage
    get (key){
        const data = JSON.parse(localStorage.getItem(key));
        return data || [];
    },
    // função para salvar os dados no localStorage
    set (key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }
}
export default Strorage;