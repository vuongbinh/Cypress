export class homeAPI {
    static getHomePageProducts() {
        cy.intercept('/entries').as('entries')
        cy.wait('@entries');
        return cy.get('@entries')
    }
}