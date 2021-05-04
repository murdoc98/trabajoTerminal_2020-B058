import express from 'express'

const server = express()

server.get('/', (req, res) => {
  console.log(req.body)
  res.send('awa')
})

server.listen(3000, () => {
  console.log('Server running owo')
})
