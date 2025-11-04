// configurar conexao com o banco
import { Sequelize } from "sequelize"

class BancoDados {
    constructor() {
        this.init()
    }

    init() {
        //colocar todas as config com o banco
        this.db = new Sequelize({
            database: 'Estoque',
            host: 'localhost',//servidor
            username: 'root',//usuario
            password: '',
            dialect:  "mysql"

        })
    }
}
export default new BancoDados()