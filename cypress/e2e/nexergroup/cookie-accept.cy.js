describe('Cookie Accept', () => {
  it('passes', () => {
    cy.viewport(2400, 1280)
    cy.visit('https://nexergroup.com/')
    cy.get('#usercentrics-root')
    .shadow().find('[data-testid="uc-accept-all-button"]').click()
  })
})