module.exports = (app) => {
    const expense = require("../controllers/expense.controller");
  
    let router = require("express").Router();
    app.use("/api/expense", router);
  
    router.post("/create", expense.create);
    router.delete("/delete/:id", expense.delete);
    router.patch("/edit/:id", expense.edit);
    router.get("/getAll/:userId", expense.getAll);
    router.get("/search/:userId/:searchText", expense.search);
  };
  