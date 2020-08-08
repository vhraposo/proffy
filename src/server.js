//Dados
const proffys = [
    { 
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", whatsapp:"4387635267",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        //se der problema de dados acima, trocar por aspas simples 
        subject: "Química", 
        cost:"20", 
        weekday: [0], 
        time_from:[720], 
        time_to: [1220]
    },
    { 
        name:"Daniele Evagenlista", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", whatsapp:"4387635267",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        //se der problema de dados acima, trocar por aspas simples 
        subject: "Química", 
        cost:"20", 
        weekday: [1], 
        time_from:[720], 
        time_to: [1220]
    },
    { 
        name:"Victor Raposo", 
        avatar:"https://avatars0.githubusercontent.com/u/69219137?s=460&u=b3ef7daf0a4e29af8fd83c65c4a9a712e742076d&v=4", 
        whatsapp:"4387635267",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        //se der problema de dados acima, trocar por aspas simples 
        subject: "Javascript", 
        cost:"20", 
        weekday: [0], 
        time_from:[720], 
        time_to: [1220]
    }
]

const subjects = [
            "Artes",
            "Biologia",
            "Ciências",
            "Educação física",
            "Física",
            "Geografia",
            "História",
            "Matemática",
            "Português",
            "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject (subjectNumber){
    const position = +subjectNumber -1
     return subjects[position]
}
function pageLanding(req, res) { 
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters=req.query
    return res.render("study.html",{
       proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    const data = req.query

    // []
    const isNotEmpty = Object.keys(data).length > 0
    //if "data" = true add 
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        //add data ao objeto (lista de proffys)
    proffys.push(data)

    return res.redirect("/study")
    }    
    

    //if "dados" = false no-add
    return res.render("give-classes.html", {subjects, weekdays})
}
//server
const express = require('express') 
const server = express()

//Nunjusck template engine
const nunjucks = require('nunjucks')

//Nunjucks config
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

// static folders config (css, scripts, imgs )

//aceess folder "public"
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
//port
.listen(5500)