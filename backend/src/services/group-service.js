const groupRepository = require('../repositories/group-repository');

exports.save = async (group) => {
    let model = await groupRepository.getById(group.id);
    model = await (model != null ? groupRepository.update(group) : groupRepository.insert(group));
    return model;
};