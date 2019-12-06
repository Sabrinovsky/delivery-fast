/// <reference types="Cypress" />

context('Dado que sou um atendente e estou na tela de listagem de usuários', () => {

  beforeEach(() => {
    cy.login('atendente@teste.com', '123456')
  })

  describe('Quando preencher o formulário corretamente e cadastrar', () => {

    it('Então eu devo ver uma mensagem de sucesso e ver o cliente com o nome alterado na lista', () => {

      cy.contains('Usuários').click()
      cy.contains('Cliente').parent().contains('Editar').click()
      cy.get('input[name="email"]').clear().type('teste@teste.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('input[name="passwordConfirm"]').type('123456')
      cy.contains('Cadastrar').click()
      cy.contains('Cadastro realizado com sucesso')
      cy.contains('Cliente').parent().contains('teste@teste.com')

    })

  })

  describe('Quando preencher o formulário incorretamente e cadastrar', () => {

    it('Então eu devo ver uma mensagem de erro e ver que o cliente na listagem não foi alterado', () => {

      cy.contains('Usuários').click()
      cy.contains('Cliente').parent().contains('Editar').click()
      cy.get('input[name="email"]').clear().type('teste@teste')
      cy.contains('Cadastrar').click()
      cy.contains('Insira um email válido')

      cy.contains('Usuários').click()
      cy.contains('Cliente').parent().contains('teste@teste.com')

    })

  })

})
