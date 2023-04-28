const CustomerRepository = require('../repositories/customerRepository')
const repository = new CustomerRepository();


const findById = async(id) => {
    return await repository.findByIdNumber(id)
}

const findAll = async() => {
    return await repository.findAll()
}

const save = async(user) => {
    return await repository.save(user)
}

const update = async(id, user) => {
    return await repository.update(id, user)
}

const remove = async(id) => {
    return await repository.remove(id)
}

module.exports = {
    findById,
    findAll,
    save,
    update,
    remove
}