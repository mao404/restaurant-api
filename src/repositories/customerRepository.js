const Customer = require('../models/customer')

class CustomerRepository {

    constructor() {

    }

    async findAll() {
        return await Customer.findAll()
    }

    async findByIdNumber(id) {
        return await Customer.findOne(id)
    }

    async save(user) {
        return await Customer.create(user)
    }

    async update(id, user) {
        return await Customer.update(id, user, {new: true})
    }

    async remove(id) {
        return await Customer.destroy(id)
    }
}


module.exports = CustomerRepository;