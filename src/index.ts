import express from "express";
const serverless = require("serverless-http");
const path = require('path')
import navigateRoutes from './routes/navigate'

const app = express()
app.use(express.json())
app.use(navigateRoutes)
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
const PORT = 4000

app.get('/ping', (_, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use((_, res, next) => {
    res.status(404).render('404.ejs')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const router = express.Router();
app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);

