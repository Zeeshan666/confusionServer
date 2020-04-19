const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Promos = require('../models/promo')
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .get((req, res, next) => {
     Promos.find({})
     .then((promo)=>{
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(promo);
     })
     .catch(err=>console.log(err))
  })
  .post((req, res, next) => {
    Promos.create(req.body)
      .then(
        (Promo) => {
          console.log("Promo Created ", dish);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Promo);
        },
        (err) => next(err)
      )
      .catch((err) => console.log(err));
  })
  .put((req, res, next) => {
    res.end("put operation its not applicable");
  })
  .delete((req, res, next) => {
    Promos.remove({})
    .then(resp=>{
      console.log("Promo Created ", dish);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(resp);
    },err=>next(err)).catch(err=>console.log(err))
  });

promoRouter
  .route("/:promoID")
  .get((req, res, next) => {
    Dishes.findById(req.params.promoID)
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(" post  not supported in promos" + req.params.promoID + "");
  })
  .put((req, res, next) => {
    Promos.findByIdAndUpdate(
      req.params.promoID,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
   Promos.findByIdAndRemove(req.params.promoID)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
  });

  module.exports =promoRouter;