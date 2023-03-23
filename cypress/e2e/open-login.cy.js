describe('Open Login', () => {
  it('passes', () => {
    cy.viewport(2400, 1280)
    cy.visit('https://www.webhallen.com/')
    cy.get('.cookie-buttons > :nth-child(1)').click()
    cy.get('[alt="login-toggle"]').click()
  })
})