const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Pagina'));

app.get('/Home', (req, res) => res.sendFile(__dirname+"/Pagina/Index.html"))
app.get('/Contact', (req, res) => res.sendFile(__dirname+"/Pagina/Contactos.html"))
app.get('/About', (req, res) => res.sendFile(__dirname+"/Pagina/Nosotros.html"))
app.get('/Products', (req, res) => res.sendFile(__dirname+"/Pagina/Productos.html"))
app.get('/Services', (req, res) => res.sendFile(__dirname+"/Pagina/Servicios.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))