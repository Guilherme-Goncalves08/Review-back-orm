import Produto from "../service/produto.js"

class ControllerProduto{
    async PegarTodos(req, res){
        try {
            const produtos=await Produto.PegarTodos()
            res.status(200).send({
                data: produtos
            })
        } catch (error) {
            res.status(500).send({msg: error.message})
        }
    }
    async PegarUm(req, res){
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({msg: error.message})
        }
    }
    async Criar(req, res){
        try {
            // const nome = req.body.nome
            // const disponivel=req.body.disponivel
            // const quantidade=req.body.quantidade
            
            const{nome, disponivel, quantidade}=req.body
            await Produto.Criar(nome,disponivel,quantidade)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({msg: error.message})
        }
    }
    async Update(req ,res){
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({msg: error.message})
        }
    }
    async Delete(req, res){
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({msg: error.message})
        }
    }


}
export default new ControllerProduto()
