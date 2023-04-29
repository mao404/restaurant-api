const { check } = require('express-validator')
const AppError = require('../../errors/appError')
const customerService = require('../../services/customerService')
const { validationResult } = require('../common')

const _nameRequired = check('Name', 'Name required').not().isEmpty()
const _telephoneRequired = check('Telephone', 'Telephone required').not().isEmpty()
const _idNumberRequired = check('idNumber', 'Telephone required').not().isEmpty()
const _idNumberExist = check('idNumber').custom(
    async (idNumber = '') => {
        const customerFound = await customerService.findByIdNumber(idNumber)
        if (customerFound) {
            throw new AppError('Cedula already exist in DB', 400)
        }
    }
);

const _idRequired = check('id', 'ID is required').not().isEmpty()
const _idExist = check('id').custom(
    async (id = '') => {
        const customerFound = await customerService.findById(id)
        if (!customerFound) {
            throw new AppError('The ID does not exist in DB', 400)
        }
    }
);



const postRequestValidations = [
    _nameRequired,
    _telephoneRequired,
    _idNumberRequired,
    _idNumberExist,
    validationResult,
]

const putRequestValidations = [
    _idRequired,
    _idExist,
    validationResult
]

const getRequestByIdValidations = [
    _idRequired,
    _idExist,
    validationResult
]

const deleteRequestValidations = [
    _idRequired,
    _idExist,
    validationResult
]

const getAllRequestValidations = [
    
]


module.exports = {
    postRequestValidations,
    putRequestValidations,
    getRequestByIdValidations,
    deleteRequestValidations,
    getAllRequestValidations
}