"use strict";

const express = require("express");
const router = express.Router();
const { Foods } = require("../models/index.js");

router.get("/foods", async (req, res) => {
  let { id } = req.params;

 
  res.status(200).json(await Foods.getData(id));
});

router.get("/foods/:id", async (req, res) => {
  let { id } = req.params;

 
  res.status(200).json(await Foods.getData(id));
});

router.post("/foods", async (req, res) => {
  let body = req.body;

  let newEntry = await Foods.dataCreated(body);

  res.status(201).send(newEntry);
});

router.put("/foods/:id", async (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let revisedFood = await Foods.dataUpdated(id,body)
 
  res.status(200).send(revisedFood);
});

router.delete("/foods/:id", async (req, res) => {
  let id = req.params.id;

  await Foods.dataDeleted(id)
  res.status(200).send("removedFood");
});

module.exports = router;
