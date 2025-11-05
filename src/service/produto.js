import Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
     }
    async PegarUm(id) {
        if (!id) {
            throw new Error('Favor. informe id valido')
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error('Produto não encontrado')
        }
        return produto
     }
    async Criar(nome, disponivel, quantidade) {
        Produto.create({
            nome, disponivel, quantidade
        })
    }
    async Update(id, nome, disponivel, quantidade) { 
        if (!id) {
            throw new Error('favor prencher todas as info')
        }

        const produtoVelho = await Produto.findByPk(id)
        
        if(!produtoVelho){
            throw new Error("Porduto não encontrado")
        }
        produtoVelho.nome = nome || produtoVelho.nome
        produtoVelho.disponivel = disponivel || produtoVelho.disponivel
        produtoVelho.quantidade = quantidade || produtoVelho.quantidade

        produtoVelho.save()
    }
    async Delete(id) { 

          if (!id) {
            throw new Error('Favor. informe id valido')
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error('Produto não encontrado')
        }
        await produto.destroy()
     }
}

export default new ServiceProduto()