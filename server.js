import express from 'express'
let app = express()
let port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Bellow Borld')
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
})
