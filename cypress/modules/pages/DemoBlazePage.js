
export default class DemoBlazePage {

    _getCardDetails (){
        let cardData = {};
        cy.get('.card-title').then($title => cardData.itemName = $title.text().trim());
        cy.get('.card-title').siblings('h5').then($price => cardData.itemPrice = $price.text().trim());
        return new Cypress.Promise(resolve => resolve(cardData));
    }

    getAllCardData() {
        let listCardData = [];
        cy.get('.card').each($card => {
            cy.wrap($card).within(() => {
                this._getCardDetails().then(cardData => listCardData.push(cardData))
            })
        });
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(listCardData));
        })
    }
}