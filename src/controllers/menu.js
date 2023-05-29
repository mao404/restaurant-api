const express = require("express");
const menuService = require("../services/menuService");
const imageService = require("../services/imageService");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger/");

const findAll = async (req, res, next) => {
  try {
    let menu = req.body;
    menu = await menuService.findAll(menu);

    res.status(200).json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    menu = await menuService.findById(id);
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const getByTitle = async (req, res, next) => {
  try {
    let { title } = req.params;
    menu = await menuService.findByTitle(title);
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const createMenu = async (req, res, next) => {
  try {
    let menu = req.body;
    menu = await menuService.save(menu);

    res.status(201).json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const updateMenu = async (req, res, next) => {
  try {
    const { id } = req.params;
    let menu = req.body;

    const menuUpdated = await menuService.update(id, menu);

    res.json(new Success(menuUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteMenu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const menu = await menuService.remove(id);
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const uploadMenuImage = async (req, res, next) => {
  try {
    const menuId = req.body.id;
    const image = req.file;

    res.json(new Success(await imageService.uploadMenuImage(menuId, image)));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  getByTitle,
  createMenu,
  updateMenu,
  deleteMenu,
  uploadMenuImage,
};
