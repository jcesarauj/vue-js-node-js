const repository = require('../repositories/permission-repository');

exports.save = async (group) => {
    let model = await repository.getById(group.id);
    model = await (model != null ? repository.update(group) : repository.insert(group));
    return model;
};