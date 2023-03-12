const CHECKBOX_LOC = "[type='checkbox']";
describe("The internet - handle checkbox", () => {
    it("Should be able to select/deselect checkbox", () => {
        cy.visit("/checkboxes");
        cy.get(CHECKBOX_LOC).each((items, idx) => {
            cy.get(items).uncheck();
        })
        // cy.get(CHECKBOX_LOC).filter(":not([checked])").should("have.length",2);
        
        // cy.get(CHECKBOX_LOC).filter(":not([checked])").then(item => {
        //     cy.get(item).uncheck();
        // })
        // cy.get(CHECKBOX_LOC).filter(":not([checked])").should("have.length",0);
    })
})