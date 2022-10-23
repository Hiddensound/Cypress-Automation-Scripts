describe('Test suite for Locators-OLG', () => {

    it('Test1- Web Locators', function()
     {
      //expect(true).to.equal(true)
      cy.visit("https://www.olg.ca/en/home.html")
      cy.title().should('eq',"OLG | Ontario's Online LOTTERY, CASINO & SPORTS 2022")
      cy.get('#login-button-sign-up-register').click()
      cy.get("#preRegEmail").type('testautomation@olg.ca')
      cy.get("button[class='btn btn-primary btn-block btn-300 pre-registration-submit']").click()
      //Create an Assertion for validating an element
      cy.get('#accountInfoTabHeader').contains("SET UP YOUR ACCOUNT")

    })

    it('Test2- Cypress xpath plugin', function()
    {
        cy.visit("https://www.olg.ca/en/home.html")
        cy.xpath("//button[@id='login-button-sign-in-register']").click()
    })

    it('Test3 - Chained Xpath', function()
    {
        cy.visit("https://www.olg.ca/en/home.html")
        cy.xpath("//ul[@class='row four-items-per-row stacked']").xpath("./li").should('have.length',8)
    }
    )
    
  })