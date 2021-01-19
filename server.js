var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())

app.post('/', function (req, res, _) {
  console.log('root')
  console.log('body', req.body)
  console.log('header', req.headers)
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.post('/login', function(req, res, _) {
  console.log('login')
  console.log('body', req.body)
  console.log('header', req.headers)
  res.json({ token: '1234' })
}) 

app.get('/me', function(req, res, _) {
  console.log('me')
  console.log('body', req.body)
  console.log('header', req.headers)
  res.json({ me: { email: 'p@mail.test' } })
})

app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 8081')
})
