const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/shop', (req, res) => {
    res.render('shop')
  })
  app.get('/about', (req, res) => {
    res.render('about')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})