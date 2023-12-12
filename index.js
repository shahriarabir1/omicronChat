const { connection } = require("./db/db.connect.js");
const environment = require("./environment/environment.js");
const { app } = require("./app.js");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
connection()
  .then(() => {
    app.listen(environment.port, () => {
      console.log(`Port is running at ${environment.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
