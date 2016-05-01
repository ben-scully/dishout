import express 'express'
let app = express()
let port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello World')
})
	
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
})