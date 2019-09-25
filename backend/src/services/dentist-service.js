const repository = require('../repositories/dentist-repository');

exports.save = async (request) => {
    let model = await repository.getById(request.id);
    model = await (model != null ? repository.update(request) : repository.insert(request));
    return model;
};