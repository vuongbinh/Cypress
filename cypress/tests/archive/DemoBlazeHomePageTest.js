import DemoBlazePage from "../../modules/archive/pages/DemoBlazePage";
import { homeAPI } from "../../support/archive/homeAPI";

describe('DemoBlaze Home Page', () => {
    let apiRes 
    beforeEach(() => {
        cy.visit('/');
        homeAPI.getHomePageProducts().then(entries => apiRes = entries);
    });

    it('Assert data from API (intercept)', () => {
            let apiProductRes = apiRes.response.body.Items.map(item => {
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
