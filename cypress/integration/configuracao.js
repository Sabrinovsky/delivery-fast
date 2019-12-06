/// <reference types="Cypress" />

context('Dado que sou um gerente e estou na tela de editar as entregas', () => {

  beforeEach(() => {
    cy.login('admin@teste.com', '123456')
  })

  describe('Quando eu alterar o tempo máximo e raio de sugestão corretamente e cadastrar', () => {

    it('Então eu devo ver uma mensagem de sucesso, recarregar a página e ver os dados alterados', () => {

      cy.contains('Entrega').click()
      cy.contains('Tempo Máximo')
      cy.get('input[name="maxTime"]').clear().type(20)
      cy.get('input[name="radius"]').clear().type(20)
      cy.contains('Cadastrar').click()
      cy.contains('Cadastro realizado com sucesso')
      cy.reload()
      cy.get('input[name="maxTime"]').should('have.value', '20.0')
      cy.get('input[name="radius"]').should('have.value', '20.0')

    })

  })

  describe('Quando eu alterar o tempo máximo e raio de sugestão incorretamente e cadastrar', () => {

    it('Então eu devo ver uma mensagem de erro e ao recarregar ver que a configuração não alterou', () => {

      cy.contains('Entrega').click()
      cy.contains('Tempo Máximo')
      cy.get('input[name="maxTime"]').clear().type('a')
      cy.get('input[name="radius"]').clear().type('a')
      cy.contains('Cadastrar').click()
      cy.contains('Campo inválido')
      cy.reload()
      cy.get('input[name="maxTime"]').should('have.value', '20.0')
      cy.get('input[name="radius"]').should('have.value', '20.0')


    })

  })

})
