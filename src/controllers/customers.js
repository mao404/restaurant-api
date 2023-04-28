const express = require('express')
const customerService = require('../services/customerService')
const Success = require('../handlers/successHandler')


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const createCustomer = async (req, res, next) => {
    try{
        let customer = req.body
        customer = await customerService.save(customer)

        res.status(201).json(new Success(customer))

    } catch (err) {
        next(err)
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const updateCustomer = async (req, res, next) => {
    try {
        const { id } = req.params
        let user = req.body

        const userUpdated = await customerService.update(id, user)

        res.json(new Success(userUpdated))
    } catch (err) {
        next(err)
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const getById = async (req, res, next) => {
    try {
        const user = await customerService.findById(req.params.id)
        res.json(new Success(user))
    } catch (err) {
        next(err)
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res
 */
const deleteCustomer = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await customerService.remove(id)
        res.json(new Success(user))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCustomer,
    updateCustomer,
    getById,
    deleteCustomer
}