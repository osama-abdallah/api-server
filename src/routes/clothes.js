"use strict";

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.post("/clothes", async (req, res) => {
  let body = req.body;

  let newClothes = await Clothes.dataCreated(body);
  res.status(201).send(newClothes);
});

router.get("/clothes", async (req, res) => {
  let { id } = req.params; //same as let id = req.params.id

  res.status(200).json(await Clothes.getData(id));
});

router.get("/clothes/:id", async (req, res) => {
  let { id } = req.params; //same as let id = req.params.id

  res.status(200).json(await Clothes.getData(id));
});

router.put("/clothes/:id", async (req, res) => {
  let { id } = req.params;
  let body = req.body;

  let renewedClothes = await Clothes.dataUpdated(id,body)
    
  res.status(200).send(renewedClothes);
});

router.delete("/clothes/:id", async (req, res) => {
  let { id } = req.params;

  await Clothes.dataDeleted(id)

  res.status(200).send("removedClothes");
});

module.exports = router;
