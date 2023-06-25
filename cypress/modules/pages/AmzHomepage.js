const SEARCH_TXT_BX_SEL = "#twotabsearchtextbox"
const SEARCH_BTN_SEL = "#nav-search-submit-button"

export class AmzHomepage {
    get searchTxtBxElement() {
        return cy.get(SEARCH_TXT_BX_SEL);
    }
    get searchBtnElement() {
        return cy.get(SEARCH_BTN_SEL);
    }
}

module.exports = AmzHomepage;