import Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
     }
    async PegarUm(id) {
        return Produto.findOne()
     }
    async Criar(nome, disponivel, quantidade) {
        Produto.create({
            nome, disponivel, quantidade
        })
    }
    async Update() { }
    async Delete() { }
}

export default new ServiceProduto()