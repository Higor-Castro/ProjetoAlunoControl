const main = document.querySelector('.main');


// Função para visualizar a atualização do cadastro do aluno
function visualizarAtualizacaoAluno(aluno) {
  main.innerHTML = `
    <h1>Atualizar Cadastro</h1>
    <form id="formAtualizarAluno" class="formulario"
    <div class="form-group">
     <label for="nome">Nome:</label>
      <input type="text" name="nome" value="${aluno.nome}" required placeholder="Nome Completo">
    </div>
    <div class="form-group">
      <label for="cpf">CPF:</label>
      <input type="text" name="cpf" value="${aluno.cpf}" required placeholder="CPF" maxlength="11" pattern="\\d{11}" title="Digite exatamente 11 dígitos" readonly>
    </div>
    <div class="form-group">
      <label for="telefone">Telefone:</label>
      <input type="text" name="telefone" value="${aluno.telefone}" required placeholder="Telefone">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" name="email" value="${aluno.email}" required placeholder="Email">
    </div>
    <div class="form-group">
      <label for="senha">Senha:</label>
      <input type="password" name="senha" value="${aluno.senha}" required placeholder="Senha">
    </div>
   <input type="submit" value="Atualizar">
    </form>
  `;

}

  // fução para visualizar as mensa
function visualizarMensagem(mensagem) {
  main.innerHTML = `
    <h1>Resultado</h1>
    <p>${mensagem}</p>
  `;
}



// Exporta as funções para serem usadas em outros módulos
export default {visualizarMensagem, visualizarAtualizacaoAluno};