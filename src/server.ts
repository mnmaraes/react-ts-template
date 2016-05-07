import * as express from 'express'

declare var __dirname: string

var app = express()

app.use(express.static(__dirname + '/../public'))

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})