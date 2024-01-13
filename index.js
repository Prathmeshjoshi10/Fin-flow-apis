const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// const userRouter = require("./app/routes/user.routes");

var corsOptions = {
  origin: "http://localhost:4200",
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/user.routes")(app);
require("./app/routes/expense.routes")(app);

const db = require("./app/models");

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// app.use(userRouter);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello Dev." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
