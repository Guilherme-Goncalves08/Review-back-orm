import ServiceProduto from "../service/produto.js"

class ControllerProduto {
    async PegarTodos(req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send({
                data: produtos
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async PegarUm(req, res) {
        try {
            // const {id} = req params

            // const params = req.params
            // params.id

            const id = req.params.id
            const produto = await ServiceProduto.PegarUm(id)

            res.status(200).send({
                data: produto
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Criar(req, res) {
        try {
            // const nome = req.body.nome
            // const disponivel=req.body.disponivel
            // const quantidade=req.body.quantidade

            const { nome, disponivel, quantidade } = req.body
            await ServiceProduto.Criar(nome, disponivel, quantidade)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Update(req, res) {
        try {
            // const{nome, disponivel, quantidade}=req.body
            const id = req.params.id
            const nome = req.body?.nome
            const disponivel = req.body?.disponivel
            const quantidade = req.body?.quantidade
            await ServiceProduto.Update(id, nome, disponivel, quantidade)

            res.status(200).send({
                msg: 'Produto alterado'
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            const produto = await ServiceProduto.Delete(id)

            res.status(204).send({
                data: produto
            })

        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }


}
export default new ControllerProduto()
