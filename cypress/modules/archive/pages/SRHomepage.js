import { herocomponent } from "../components/SimplifyRecipe/HeroComponent";

export class SRHomePage {
    heroComponent(){
        return new herocomponent(cy.get(herocomponent.COMP_SEL));
    }

    getCardTitle (){
        let title = '';
        this.heroComponent().cardTitle.then($title =>{
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve =>  cy.wrap('').then(() => resolve(title)))
    }
}