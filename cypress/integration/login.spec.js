/// <reference types="Cypress" />

context('Dado que sou atendente e cadastro um novo cliente', () => {

  it('devo ver mensagem de sucesso e ver o novo cliente na listagem',()=>{
    cy.login('atendente@teste.com','123456')
    cy.get('.page-name').contains('Admin')
  })

  it('erro', () => {
    cy.login('atendente@teste.com','12345623')
    cy.contains('Usuário ou senha incorretos');
  })

})
