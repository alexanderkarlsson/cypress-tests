describe('Open Category', () => {
  it('passes', () => {
    cy.viewport(2400, 1280)
    cy.visit('https://www.webhallen.com/se/category/16279-PS5-Konsoler')
  })
})