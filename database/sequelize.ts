import {Error, Sequelize} from 'sequelize';

const dvdrental = new Sequelize('dvdrental', 'postgres', '05102001', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

export default () => {
    
    dvdrental
        .authenticate()
        .then(() => {
            console.log("Conexão bem sucedida")
        }).catch((error: Error) => {
            console.log(`Conexão não foi bem sucedida: ${error}`)
        });
}