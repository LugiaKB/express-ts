const sequelize = require("sequelize");
const connection = new sequelize(
    "postgres://postgres:05102001@localhost:5432/dvdrental",
    {
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    }
);

const film = connection.define('film', {
    film_id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: sequelize.STRING},
    release_year: {type: sequelize.STRING},
    language_id: {type: sequelize.STRING},
    rental_duration: {type: sequelize.STRING},
    rental_rate: {type: sequelize.STRING},
    length: {type: sequelize.STRING},
    replacement_cost: {type: sequelize.STRING},
    rating: {type: sequelize.STRING},
    last_update: {type: sequelize.STRING},
    special_features: { type: sequelize.ARRAY(sequelize.STRING) },
    fulltext: {type: sequelize.STRING}

});

module.exports = film;