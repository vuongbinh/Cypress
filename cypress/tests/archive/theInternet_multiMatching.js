// describe("Multiple matching element",() =>{
//     it("Should be able to interact with list of elm",()=>{
//         cy.visit("/login")

//         // eq 
//         cy.get("input").eq(0).type("tomsmith")
//         cy.get("input").eq(1).type("SuperSecretPassword!")
//         // closure
//         cy.get("input").then(item => {
//             cy.get(item[0]).clear()
//             cy.get(item[1]).clear()
//             cy.get(item[0]).type("tomsmith")
//             cy.get(item[1]).type("SuperSecretPassword!")
//         })
//         // .each(likely as forEach)
//         cy.get("input").each((item, idx) =>{
//             cy.get(item).type("something not right")
//         })

//         cy.get('button[type="submit"]').click()
//         cy.screenshot()
//     })
// })