describe('Basic page interactions', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it('sets the header text to the item\'s name when double clicked', () => {
    cy.get('[data-cy="box-1-items-list"] > :nth-child(2)') //finds 2nd li
      .dblclick();
      
    cy.get('[data-cy="box-1-selected-name"]')
      .invoke('text')
      .should('equal', 'Option Two');
  });

  it('displays the correct count for the number of selected checkboxes', () => {
    cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input') //select 1st element, input el inside label el
      .check(); //checks checkbox
      //check span display correct count
    cy.get('[data-cy="box-2-selected-count"]')
      .invoke('text') //pulls dom text
      .should('equal', '1'); //1 box checked in text display
  });
  //check more checkboxes and test, ideally

  //dropdown
  it('displays the name of the currently selected item', ()=> {
    cy.get('[data-cy="box-3-dropdown"]') //select element attr
      .select('Option Three'); //choose value?
    cy.get('[data-cy="box-3-selected-name"]')
      .invoke('text')
      .should('equal', 'Option Three');
  });
  //check mouse down event, xy coordinate. trigger(event) command
  it('should display the name of the most recently hovered item', () => {
    cy.get('[data-cy="box-4-items-list"] > :nth-child(2)') //hover over 2nd li
      .trigger('mouseover');  //.trigger('event', x, y)

    cy.get('[data-cy="box-4-selected-name"]')
      .invoke('text')
      .should('equal', 'Option Two');
  });

})