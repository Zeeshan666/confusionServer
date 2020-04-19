const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you all leaders");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end("put operation its not applicable");
  })
  .delete((req, res, next) => {
    res.end("all leaders are delete");
  });

leaderRouter
  .route("/:leaderID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ("application/type", "html/txt");
    next();
  })
  .get((req, res, next) => {
    res.end("we will send you requested leaders" + req.params.leaderID + "to you");
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(" post  not supported in leaders" + req.params.leaderID + "");
  })
  .put((req, res, next) => {
    res.write("updating the leaders" + req.params.leaderID+ "\n");
    res.end(
      "will update the leaders" +
        req.body.name +
        "with details" +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("this items will delete " + req.params.leaderID);
  });

module.exports = leaderRouter;
