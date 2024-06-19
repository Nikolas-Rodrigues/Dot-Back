import sequelize from "../dataBase/database.js"
import { DataTypes } from "sequelize"

const Conferencia = sequelize.define('Conferencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(255)
    },
    data: {
        type: DataTypes.STRING(255)
    },
    link: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});


export default Conferencia 