import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'Fersa', '123456', {
    host: 'SOC29001S5QP8',
    dialect: 'mssql'
});

export default db;