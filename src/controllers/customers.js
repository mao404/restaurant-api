const express = require("express");
const customerService = require("../services/customerService");
const Success = require("../handlers/successHandler");
const { Logger } = require("winston");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const findAll = async (req, res, next) => {
  try {
    let customers = req.body;
    customers = await customerService.findAll(customers);

    res.status(200).json(new Success(customers));
  } catch (err) {
    next(err);
  }
};
const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    customer = await customerService.findById(id);
    res.json(new Success(customer));
  } catch (err) {
    next(err);
  }
};

const getByIdNumber = async (req, res, next) => {
  try {
    let { cedula } = req.params;
    customer = await customerService.findByIdNumber(cedula);
    res.json(new Success(customer));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createCustomer = async (req, res, next) => {
  try {
    let customer = req.body;
    customer = await customerService.save(customer);

    res.status(201).json(new Success(customer));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    let customer = req.body;

    const customerUpdated = await customerService.update(id, customer);

    res.json(new Success(customerUpdated));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.remove(id);
    res.json(new Success(customer));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  getByIdNumber,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
