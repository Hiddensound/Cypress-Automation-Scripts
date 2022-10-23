describe("Interacting with radio and checkboxes", () => {

    it('Checking Radio Buttons', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //verify visibility of radio buttons

        cy.get("input#female").should('be.visible')
        cy.get("input#male").should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
    })

    it('Checking checkboxes', ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //selecting checkbox
        cy.get("input#wednesday").should('be.visible').check().should('be.checked')

        //unselecting the checkbox
        cy.get("input#wednesday").uncheck().should('not.be.checked')

        //selecting all checkboxes at all
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select all but check one
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })
})