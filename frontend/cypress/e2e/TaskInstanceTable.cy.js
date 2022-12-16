describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > input').type('Evan_Voeltner')
    cy.get(':nth-child(2) > input').type('Password1@')
    cy.get('.form > button').click()
    cy.wait(500)
    cy.visit('http://localhost:3000/main')
    cy.wait(500)
  })

  
})