import { Sequelize } from 'sequelize'
//Database hosteada pelo elephantSQL

const sequelize = new Sequelize('postgres://jrzeoljx:yckQ-slYXqRFOuquY3y5niJybzU1BgXW@silly.db.elephantsql.com/jrzeoljx')

try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
 } catch (erro) {
     console.log('Erro ao conectar banco de dados')
     console.log(erro)
 }

export default sequelize;
