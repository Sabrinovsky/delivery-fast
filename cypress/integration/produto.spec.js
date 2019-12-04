/// <reference types="Cypress" />

context('Features do produto', () => {

  beforeEach(() => {

    cy.login('gerente@teste.com','123456')

  })

  describe('Dado que sou gerente e cadastro um novo produto',()=>{

    it('Devo ver mensagem de sucesso e ver o novo produto na listagem',()=>{

      cy.contains('Produtos').click()
      cy.contains('Novo Produto').click()
      cy.get('[name="code"]').type('100')
      cy.get('input[name="description"]').type('Pao')
      cy.get('[name="price"]').type('5')
      cy.contains('Cadastrar').click()
      cy.contains('Cadastro realizado com sucesso!')
      cy.url().should('include', '/admin/produtos')
    })
  })

  describe('Dado que eu sou o gerente e cadastro um produto que já existe', ()=>{

    it('Devo ver mensagem de código já existente no sistema',()=>{

      cy.contains('Produtos').click()
      cy.contains('Novo Produto').click()
      cy.get('[name="code"]').type('100')
      cy.get('input[name="description"]').type('Pao')
      cy.get('[name="price"]').type('5')
      cy.contains('Cadastrar').click()
      cy.contains('Código informado já existe no sistema')
    })
  })

  describe('Dado que eu sou o gerente e cadastro um produto sem os campos obrigatorios', ()=>{

    it('Devo ver mensagem de campo obrigatório',()=>{

      cy.contains('Produtos').click()
      cy.contains('Novo Produto').click()
      cy.contains('Cadastrar').click()
      cy.contains('Código é obrigatório')
      cy.contains('Preço é obrigatório')
    })
  })

})
