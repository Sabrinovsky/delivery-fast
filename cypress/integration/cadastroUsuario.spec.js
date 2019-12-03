/// <reference types="Cypress" />

context('Dado que sou atendente e cadastro um novo cliente', () => {
  beforeEach(() => {

    cy.login('atendente@teste.com','123456')
    
  })

  it('Devo ver mensagem de sucesso e ver o novo cliente na listagem',()=>{

    cy.contains('Usuários').click()
    cy.contains('Incluir').click()
    cy.get('[name="name"]').type('user')
    cy.get('[name="username"]').type('user')
    cy.get('[name="email"]').type('user@user.com')
    cy.get('select').select('Cliente')
    cy.get('[name="password"]').type('123456')
    cy.get('[name="passwordConfirm"]').type('123456')
    cy.contains('Cadastrar').click()
    cy.contains('Cadastro realizado com sucesso!')

  })
})
