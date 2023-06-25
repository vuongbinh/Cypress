import { SRHomePage } from "../modules/pages/SRHomepage";

describe('SR Homepage Test', () => {
    it('should be able to get all titles', () => {
        cy.visit('https://www.simplyrecipes.com/');
    cy.get('.card__title').each(($title,index) => {
        cy.log($title.text().trim())
        cy.log(index);
    });
    });
    it.only('Should be abke to interact with component', () => {
        cy.visit('https://www.simplyrecipes.com/');
        const srHomePage =  new SRHomePage();
        srHomePage.heroComponent().cardTitle.each(($title,index) => {
            cy.log($title.text().trim())
            cy.log(index);
        });
    });
}); 