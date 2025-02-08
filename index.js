const app  = require("./src/app");

const port = 3001;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Server running on port ${ port }`);
});