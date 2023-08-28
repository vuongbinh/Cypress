export class herocomponent {
   static COMP_SEL = '.showcase-hero ';

   constructor(component){
      this.component=component;
   }

   get cardTitle(){
      return this.component.find('.card__title');
   }
   
}