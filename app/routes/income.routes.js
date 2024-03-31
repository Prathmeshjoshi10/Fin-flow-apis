module.exports = (app) => {
    const income = require("../controllers/income.controller");
  
    let router = require("express").Router();
    app.use("/api/income", router);
  
    router.post("/create", income.create);
    router.delete("/delete/:id", income.delete);
    router.patch("/edit/:id", income.edit);
    router.get("/getAll/:userId", income.getAll);
    router.get("/search/:userId/:searchText", income.search);
  };
  