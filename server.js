const express = require('express')
const app = express()
const brain = require('brain.js');
const homeRoutes = require('./routes/home')
const resultsRoutes = require('./routes/results')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.post('/contrast', resultsRoutes)

app.listen(process.env.PORT || 7070, ()=>{
    console.log('Server is running, you better catch it!')
})
