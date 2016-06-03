var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}/`)
})