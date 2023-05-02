const express = require("express");
const userService = require("../services/userService");
const Success = require("../handlers/successHandler");
const { Logger } = require("winston");

const findAll = async (req, res, next) => {
  try {
    let users = req.body;
    users = await userService.findAll(users);

    res.status(200).json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    users = await userService.findById(id);
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const getByIdNumber = async (req, res, next) => {
  try {
    let { cedula } = req.params;
    users = await userService.findByIdNumber(cedula);
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    let users = req.body;
    users = await userService.save(users);

    res.status(201).json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    let users = req.body;

    const userUpdated = await userService.update(id, users);

    res.json(new Success(userUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await userService.remove(id);
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  getByIdNumber,
  createUser,
  updateUser,
  deleteUser,
};
