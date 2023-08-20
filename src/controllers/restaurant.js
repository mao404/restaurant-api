const express = require("express");
const restaurantService = require("../services/restaurantService");
const imageService = require("../services/imageService");
const Success = require("../handlers/successHandler");
const { Logger } = require("winston");

const findAll = async (req, res, next) => {
  try {
    let restaurant = req.body;
    restaurant = await restaurantService.findAll(restaurant);

    res.status(200).json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    restaurant = await restaurantService.findById(id);
    res.json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const createRestaurant = async (req, res, next) => {
  try {
    let restaurant = req.body;
    restaurant = await restaurantService.save(restaurant);

    res.status(201).json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    let restaurant = req.body;

    const restaurantUpdated = await restaurantService.update(id, restaurant);

    res.json(new Success(restaurantUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurantService.remove(id);
    res.json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const uploadResLogo = async (req, res, next) => {
  try {
    const menuId = req.body.id;
    const logo = req.file;

    res.json(
      new Success(await imageService.uploadRestaurantLogo(menuId, logo)),
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  uploadResLogo,
};
