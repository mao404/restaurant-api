const express = require("express");
const inventoryService = require("../services/inventoryService");
const Success = require("../handlers/successHandler");
const { Logger } = require("winston");

const findAll = async (req, res, next) => {
  try {
    let inventory = req.body;
    inventory = await inventoryService.findAll(inventory);

    res.status(200).json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    inventory = await inventoryService.findById(id);
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getByTitle = async (req, res, next) => {
  try {
    let { title } = req.params;
    inventory = await inventoryService.findByTitle(title);
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const createInventory = async (req, res, next) => {
  try {
    let inventory = req.body;
    inventory = await inventoryService.save(inventory);

    res.status(201).json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const updateInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    let inventory = req.body;

    const inventoryUpdated = await inventoryService.update(id, inventory);

    res.json(new Success(inventoryUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const inventory = await inventoryService.remove(id);
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  getByTitle,
  createInventory,
  updateInventory,
  deleteInventory,
};
