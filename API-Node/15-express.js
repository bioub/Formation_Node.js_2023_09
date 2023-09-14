const express = require('express');

const app = express();

// app.use(express.json());

app.post('/users/register', express.json(), (req, res) => {
  console.log(req.body);

  const todo = {id: 10, ...req.body};

  // for (const key in req.body) {
  //   if (Object.hasOwnProperty.call(todoFound, key)) {
  //     todoFound[key] = req.body[key];
  //   }
  // }

  res.json({
    msg: 'user created',
  })
});

// app.all quelque soit la méthode HTTP
// et toutes les url qui comment par /api
// app.use('/api', () => {
//   res.send('/api');
// });

// app.all quelque soit la méthode HTTP
// URL exacte /demo-all
app.all('/demo-all', (req, res) => {
  res.send('Demo');
});

// app.METHOD HTTP
app.get('/', (req, res) => {
  console.log(req.query);
  res.send('Home');
});

app.get('/hello/:prenom', (req, res) => {
  res.json({ msg: 'Hello ' + req.params.prenom });
});

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello' });
});

app.listen(3000, () => {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
