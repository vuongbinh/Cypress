const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'do9rqb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on ("task",{
        async connectDB(query){
          const client = new Clients({
            user:"ec2-user",
            password:"123456789",
            host:"database-1.cko8wiacw0wl.ap-southeast-1.rds.amazonaws.com",
            database: "database-1",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
    projectId: "BL0.1",
    specPattern: "./cypress/tests/*/*",
    baseUrl: "https://demoblaze.com/"
  },
  defaultCommandTimeout: 10000
});
