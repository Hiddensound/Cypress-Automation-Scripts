/// <reference types="Cypress" />

describe("Interacting with DropDowns", () => {

    it.skip('Dropdown with select', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
      
      //handle normal dropdown with select tag

        cy.get("#zcf_address_country").select("Afghanistan")
        .should('have.value','Afghanistan')
   
    })

    it.skip('Dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
      
      //handle dropdowns without select tag

        cy.get("##select2-billing_country-container").should('be.visible')
        cy.get("##select2-billing_country-container").click
        cy.get("input[role='combobox']").type("India").type("{enter}")
        cy.get("##select2-billing_country-container")
        .should('have.text','India')
   
    })

    //Handling auto-suggested dropdowns

    it.skip('Dropdown with dynamic autoselect', ()=>{
        cy.visit("https://www.wikipedia.org/")
      
    cy.get("#searchInput").type("Delhi")
    cy.get(".suggestion-title").contains('Delhi University')
    .click()
   
    })

    //handling dynamic dropdowns

    it('Handling dynamic dropdowns', ()=>{
        cy.visit("https://www.google.com")
      
    cy.get("input[title='Search']").type("cypress automation")
    cy.wait(3000)

    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
        if($el.text()=='cypress automation'){
            cy.wrap($el).click()
        }

    })

    cy.get('input.gLFyf').contains("cypress automation")
    
   
    })

})