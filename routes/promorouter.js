const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you all promos");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promos: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end("put operation its not applicable");
  })
  .delete((req, res, next) => {
    res.end("all prmos are delete");
  });

promoRouter
  .route("/:promoID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you requested promos" + req.params.promoID + "to you");
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(" post  not supported in promos" + req.params.promoID + "");
  })
  .put((req, res, next) => {
    res.write("updating the promos" + req.params.promoID + "\n");
    res.end(
      "will update the promos" +
        req.body.name +
        "with details" +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("this promos will delete " + req.params.promoID);
  });

  module.exports =promoRouter;