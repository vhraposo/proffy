//server
const express = require('express') 
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Nunjusck template engine
const nunjucks = require('nunjucks')

//Nunjucks config
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

// static folders config (css, scripts, imgs )
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//aceess folder "public"
.use(express.static("public")) //caso der erro voltar o server ao começo dessa linha
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
//port
.listen(5500)