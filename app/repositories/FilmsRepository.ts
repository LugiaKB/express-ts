const model = require("./FilmsModels");

exports.getAll = function() {
    return model.findAll();
};