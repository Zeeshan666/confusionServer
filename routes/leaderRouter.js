const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
const mongoose = require("mongoose");
const leader = require("../models/leader");

leaderRouter
  .route("/")
  .get((req, res, next) => {
    leader
      .find({})
      .then((leader) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(leader);
      })
      .catch((err) => console.log(err));
  })
  .post((req, res, next) => {
    leader
      .create(req.body)
      .then(() => {
        (leader) => {
          console.log("Leader Created ", leader);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        };
      })
      .catch((err) => console.log(err));
  })
  .put((req, res, next) => {
    res.end("put operation its not applicable");
  })
  .delete((req, res, next) => {
    leader
      .remove({})
      .then((resp) => {
        console.log("leader del ", resp);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      })
      .catch((err) => console.log(err));
  });

leaderRouter
  .route("/:leaderID")
  .get((req, res, next) => {
    leader
      .findById(req.params.leaderID)
      .then((leader) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(leader);
      })
      .catch((err) => console.log(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(" post  not supported in leaders" + req.params.leaderID + "");
  })
  .put((req, res, next) => {
    leader.findByIdAndUpdate(
      req.params.leaderID,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (leader) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    leader
    .findByIdAndRemove(req.params.leaderID)
    .then((resp) => {
      console.log("leader del ", resp);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(resp);
    })
    .catch((err) => console.log(err));
  });

module.exports = leaderRouter;
