const DROPDOWN = 'select[id="dropdown"]';

describe("Dropdown handling", () => {
    it('Should be able to select options in dropdown list', () => {
        cy.visit("/dropdown")

        cy.get(DROPDOWN).select(1);

        cy.get(DROPDOWN).select("2");

        cy.get(DROPDOWN).select("Option 1");

        cy.get("select option:selected").invoke("text").should("eq","Option 1");

    });
});