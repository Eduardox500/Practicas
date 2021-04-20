const express = require('express')
const app = express()
const port = 3000

app.get('/Home', (req, res) => res.send('Pagina de inicio'))
app.get('/Servicios', (req, res) => res.send('Pagina de servicios'))
app.get('/Contactos', (req, res) => res.send('Pagina de contactos'))
app.get('/Productos', (req, res) => res.send('Pagina de productos'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))