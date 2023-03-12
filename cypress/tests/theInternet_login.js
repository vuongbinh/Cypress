describe('Login function', () => {
    it('User should be able to login', () => {
        cy.visit("/login")
        cy.location('pathname',{timeout: 500}).should("eq","/login")
        // find element by ID
        cy.get('#username').type("tomsmith")
        cy.get('[name="password"]').type("SuperSecretPassword!")
        cy.get('button[type="submit"]').click()
        cy.log("Hot reload testing")
    })
})