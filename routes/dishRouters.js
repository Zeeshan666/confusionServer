const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you all dishes");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("not supported in dishes");
  })
  .delete((req, res, next) => {
    res.end("all items will delete");
  });

dishRouter
  .route("/:dishID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you requested dish" + req.params.dishID + "to you");
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(" post  not supported in dishes" + req.params.dishID + "");
  })
  .put((req, res, next) => {
    res.write("updating the dish" + req.params.dishID + "\n");
    res.end(
      "will update the dish" +
        req.body.name +
        "with details" +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("this items will delete " + req.params.dishID);
  });

module.exports = dishRouter;
