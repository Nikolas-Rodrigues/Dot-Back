import { Sequelize } from 'sequelize'
//Database hosteada pelo elephantSQL

const sequelize = new Sequelize('postgres://vrosixkb:dAdUkYyH4re21uIsr74xwLgneIHB9WKP@silly.db.elephantsql.com/vrosixkb')

try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
 } catch (erro) {
     console.log('Erro ao conectar banco de dados')
     console.log(erro)
 }

export default sequelize;
