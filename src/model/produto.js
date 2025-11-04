import bancodados from '../config/database.js'

class Produto {
    constructor() {
        this.model = bancodados.db.define('produtos', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING,

            },
            disponivel: {
                type: bancodados.db.Sequelize.BOOLEAN,

            },
            quantidade: {
                type: bancodados.db.Sequelize.INTEGER,

            },
            
        }) //chama o banco
    }
}
export default new Produto().model