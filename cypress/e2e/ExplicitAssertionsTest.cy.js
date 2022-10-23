describe('Test suite for Explicit Assertions-OLG', () => {

    it('Test1- Explicit Assertions (expect, assert)', function()
     {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        let acName = "Paul Collings"

        cy.get('.oxd-userdropdown-name').then( (x)=> {           //capture the text of element and do assertions in JS snippet

            var actName = x.text()

            //explicit assertion in BDD approach (expect)
           
            expect(actName).to.equal(acName)    
            
            //explicit assertion in TDD approach (assert)

            assert.equal(actName,acName)
            assert.notEqual(actName, acName)
            
        })

    })


  })