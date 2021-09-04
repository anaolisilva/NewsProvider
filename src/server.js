const express = require('express')
const app = express()
const routes = require ('./routes')

app.use(express.json())
// Configura que recebe requisições em json.
app.use(routes)

// Errors
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({error: error.message})
})


app.listen(3333, () => {
  console.log('Server running.')
  
});
 