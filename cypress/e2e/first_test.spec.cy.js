describe('Heading text', () => {  //group tests
  it('contains the correct title', () => { //define actual test
    cy.visit('http://localhost:3000/example-1'); 

    cy.get('h1') //find h1 element
      .invoke('text') //get inner text
      .should('equal', 'My Awesome Web Application'); //equal to this value
  });
})