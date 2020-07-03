// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function allBooks() {
  // cy.request - client http
  return cy.request({
    method: 'GET',
    url: 'Books',
    failOnStatusCode: false,
  })
}

export { allBooks };