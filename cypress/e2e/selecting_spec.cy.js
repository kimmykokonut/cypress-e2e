describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://localhost:3000/example-3');
    cy.get('[data-cy="last-name-chars-left-count"]')
      
      .invoke('text')
      .should('equal', '15');

    cy.get('[data-cy="input-last-name"]').type('hello');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '10');

    cy.get('[data-cy="input-last-name"]').type(' my friend');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '0');
  });
  it('prevents the usser from typing more characters once max is exceeded', () => {
    cy.visit('http://localhost:3000/example-3');

    cy.get('[data-cy="input-first-name"]').type('abcdefghijkldsjdklfnejskjfe');

    cy.get('[data-cy="input-first-name"]')
      .should('have.attr', 'value', 'abcdefghijkldsj') //check value of element attribute
  })
})