const express = require('express')
const app = express()

app.use(express.static('src'))


// Iniciar o servidor
const PORT = 4000
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})