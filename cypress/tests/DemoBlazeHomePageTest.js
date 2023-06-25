import DemoBlazePage from "../modules/pages/DemoBlazePage";
import products from "./data/products.json";

describe('DemoBlaze Home Page', () => {
    xit('Should be able to get card data', () => {
        cy.visit('/');
        new DemoBlazePage().getAllCardData().then(listCardData => {
            cy.wrap('').then(() => {
                expect(listCardData).to.be.deep.eq(products)
            })
        })
    });

    it('Assert data from API (intercept)', () => {
        cy.visit('/');
        //Intercept default homepage
        cy.intercept('/entries').as('entries')
        cy.wait('@entries');
        cy.get('@entries').then($entries => {
            var apiProductRes = $entries.response.body.Items
            apiProductRes = apiProductRes.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            new DemoBlazePage().getAllCardData().then(listCardData => {
                cy.wrap('').then(() => {
                    expect(listCardData).to.be.deep.eq(apiProductRes)
                })
            })
        })
    });
});