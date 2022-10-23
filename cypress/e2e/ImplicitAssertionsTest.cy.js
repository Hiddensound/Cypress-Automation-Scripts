describe('Test suite for Implicit Assertions-OLG', () => {

    it('Test1- Implicit Assertions (should)', function()
     {
      //expect(true).to.equal(true)
      cy.visit("https://www.olg.ca/en/home.html")
      cy.url().should('include','olg.ca/en/home')               //example for 'should' with 'include' keyword
      .should('eq','https://www.olg.ca/en/home.html')   //example for 'should' with 'eq' keyword
      .should('contain','olg.ca')                       //example for 'should' with 'contain' keyword
      cy.title().should('eq',"OLG | Ontario's Online LOTTERY, CASINO & SPORTS 2022")   //Implicit 'should' assertion

    })

    it('Test2- Implicit Assertions(and)', function()
    {
        cy.visit("https://www.olg.ca/en/home.html")
        cy.url().should('include','olg.ca/en/home')               //example for 'should' with 'include' keyword
        .and('eq','https://www.olg.ca/en/home.html')   //example for 'and' with 'eq' keyword
        .and('contain','olg.ca')                       //example for 'and' with 'contain' keyword
        .and('not.contain','greenolg')                  //negative assertion with 'not.contain'
        cy.title().should('eq',"OLG | Ontario's Online LOTTERY, CASINO & SPORTS 2022")
        .and('contain',"LOTTERY")
        .and('contain',"CASINO")

        cy.get(':nth-child(3) > .color-section-wrapper > .container > .content_two > :nth-child(1) > :nth-child(1) > .cq-dd-image')
        .should('exist')
        .and('be.visible')

        cy.get('#cookie-policy-notification-accept').click()

        cy.get('#login-button-sign-in-register').click()
        cy.get('#loginUsername_login-modal').type('ex')
        cy.get('#loginUsername_login-modal').should('have.value','ex')
    })

  })