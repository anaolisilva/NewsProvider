const express = require('express');
const app = express();
const routes = require ('./routes');

//Defines requests received and sent in json.
app.use(express.json());

app.use('/api', routes);

// Errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({error: error.message});
})


app.listen(3333, () => {
  console.log('Server running on port 3333.');
  
});
 