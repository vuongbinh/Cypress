import AmzHomepage from "../../modules/pages/AmzHomepage";
import AmazonSearchResultPage from "../../modules/pages/AmzSearchResultpage";

describe("Amazon search function", () => {
    it("Verify user is able to search a dining table", () => {
        const SEARCH_VALUE = 'Dining table'

        cy.visit("/");
        let amzHome = new AmzHomepage();
        amzHome.searchTxtBxElement.type(SEARCH_VALUE);
        amzHome.searchBtnElement.click();

        let amzResultList = new AmazonSearchResultPage();
        amzResultList.searchResultList.should("not.have.length",0);
    })
})