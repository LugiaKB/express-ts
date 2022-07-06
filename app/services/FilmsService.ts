const repository = require("./FilmsRepository")

exports.getAll = function() {
    return repository.getAll();
};