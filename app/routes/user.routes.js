module.exports = (app) => {
  const users = require("../controllers/user.controller");

  let router = require("express").Router();
  app.use("/api/users", router);

  router.post("/register", users.create);
  router.post("/login", users.login);
};
