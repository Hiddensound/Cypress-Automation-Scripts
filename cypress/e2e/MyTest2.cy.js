describe('My First Test Suite', () => {

    it('Test1- Positive Testcase', function()
     {
      //expect(true).to.equal(true)
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')

    })

    it('Test2- Negative Testcase', function()
    {
        cy.visit("https://www.olg.ca/en/home.html")
        cy.title().should('eq','OLG')
    })

  })
  