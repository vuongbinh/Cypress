import {homeAPI} from "../support/homeAPI";
import DemoBlazePage from "../modules/pages/DemoBlazePage";

describe('Demo Blaze Login test', () => {
    let apiProduct
    beforeEach(() => {
        cy.login('cyadmin','Test!234');
        cy.visit('/');
        homeAPI.getHomePageProducts().then(entries => apiProduct = entries);
    });

    it('should be able to login by api_cookie', () => {
        let apiProductRes = apiProduct.response.body.Items.map(item => {
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
    });
});