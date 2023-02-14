const express = require("express");

const { PoductsController } = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get("/", PoductsController.getProducts) // http://localhost:3000/api/products/
    .get("/:id", PoductsController.getProduct) // http://localhost:3000/api/products/23
    .post("/", PoductsController.createProduct);

  app.use("/api/products", router);
};
