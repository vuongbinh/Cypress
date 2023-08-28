// import HeaderComponent from "../../modules/archive/components/HeaderComponent";

// describe('Header component test', () => {
//     const brandName = 'PRODUCT STORE';
//     let headerComp;
//     before(()=>{
//         cy.visit('/')
//         headerComp = new HeaderComponent();
//     })
//     it('should able to verify brand logo', () => {
//         headerComp.brandLogoImg().should('be.visible');
//         headerComp.brandLogo().should('contain.text',brandName);
//     });
//     it('should able to verify header menu', () => {
//         headerComp.menuItemList().each(menuItem => {
//             cy.wrap(menuItem).should("not.be.empty");
//         })
//     });
// });