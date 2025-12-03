// fução para visualizar as mensagens 
const main = document.querySelector('.main');
export function visualizarMensagem(mensagem) {
  main.innerHTML = `
    <h1>Resultado</h1>
    <p>${mensagem}</p>
  `;
}