/**
 * @memberOf cy
 * @method login
 * */
Cypress.Commands.add('login', (usr, pwd) => {
    cy.request({
        url: 'https://api.demoblaze.com/login',
        method: 'POST',
        headers: {
            ContentType: 'application/json'
        },
        body: {
            username: usr, password: btoa(pwd)
        }
    }).then(res => {
        const authToken = res.body.split('Auth_token: ')[1];
        cy.log(authToken);
        cy.setCookie('tokenp_', authToken)
    })
})