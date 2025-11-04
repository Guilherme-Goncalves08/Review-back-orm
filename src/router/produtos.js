import express from 'express'
import ControllerProduto from '../controller/produtos.js'

const router = express.Router()

router.get('/produtos', ControllerProduto.PegarTodos)
router.get('/produto/:id', ControllerProduto.PegarUm)
router.post('/produto', ControllerProduto.Criar)
router.put('produto/:id', ControllerProduto.Update)
router.delete('produto/:id', ControllerProduto.Delete)

export default router