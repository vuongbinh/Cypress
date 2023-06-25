import { herocomponent } from "../components/SimplifyRecipe/HeroComponent";

export class SRHomePage {
    heroComponent(){
        return new herocomponent(cy.get(herocomponent.COMP_SEL));
    }
}