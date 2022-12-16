describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > input').type('Evan_Voeltner')
    cy.get(':nth-child(2) > input').type('Password1@')
    cy.get('.form > button').click()
    cy.wait(500)
    cy.visit('http://localhost:3000/main')
    cy.wait(500)
    cy.visit('http://localhost:3000/new')
    cy.wait(500)
    cy.get('[data-test="name"]').type('New Task')
    cy.get('[data-test="importance"]').select('Low')
    cy.get('[data-test="date"]').type('2022-12-16')
    cy.get('[data-test="recur-no"]').click()
    cy.get('[data-test="submit"]').click()
    cy.wait(500)
    cy.visit('http://localhost:3000/main')
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .table > tbody > :nth-child(1) > :nth-child(3) > [data-test="task-completion-toggle"]').click()
    cy.get(':nth-child(3) > .row > .col > :nth-child(2) > .table > tbody > :nth-child(1) > :nth-child(3) > [data-test="task-completion-toggle"]').click()
  })

  
})