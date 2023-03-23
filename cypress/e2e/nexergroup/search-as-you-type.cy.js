describe('Cookie Accept', () => {
  it('passes', () => {
    cy.viewport(2400, 1280)
    cy.visit('https://nexergroup.com/')

    // Cookie accept
    cy.get('#usercentrics-root')
    .shadow().find('[data-testid="uc-accept-all-button"]').click()

    // Search
    let query = 'Lidköping'
    cy.get('#nav-search-toggle').click()
    cy.get('.nexer-search__input').type(query)
    cy.get('.nexer-table-list').contains(query).click()

    // Did we find it?
    cy.get('h1').contains(query)
  })
})