describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://localhost:3000/example-3');

    cy.get('[data-cy="last-name-chars-left-count"]')
      .as('charsLeftSpan'); //aliasing to reduce repetitve selectors and verboseness
    cy.get('[data-cy="input-last-name"]')
      .as('charInput');

    cy.get('@charsLeftSpan') //need @alias
      .then($charsLeftSpan => { //$charsLeftSpan = DOM element returned. (not a promise)
        expect($charsLeftSpan.text()).to.equal('15');
      });

    cy.get('@charInput').type('hello');

    cy.get('@charsLeftSpan')
      .invoke('text')
      .should('equal', '10');

    cy.get('@charInput').type(' my friend');

    cy.get('@charsLeftSpan')
      .invoke('text')
      .should('equal', '0');
  });
  it('prevents the usser from typing more characters once max is exceeded', () => {
    cy.visit('http://localhost:3000/example-3');

    cy.get('[data-cy="input-first-name"]')
      .as('charInputFirst');

    cy.get('@charInputFirst').type('abcdefghijkldsjdklfnejskjfe'); //need to redefine alias

    cy.get('@charInputFirst')
      .should('have.attr', 'value', 'abcdefghijkldsj') //check value of element attribute
  })
})