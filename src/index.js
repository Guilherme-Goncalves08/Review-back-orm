import express from 'express'
import bancodados from './config/database.js'
import router from './router/produtos.js'

const app = express()
app.use(express.json())

app.use('/api/v1', router)

const porta = 3000
bancodados.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
            console.log('Servidor rodando na porta' + porta)

        })
    })