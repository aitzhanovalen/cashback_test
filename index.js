const express = require('express')
// const app = express()
const PORT = process.env.PORT || 5000

const loaders = require('./loaders');

// app.get('/', (req, res) => {
//   res.send('Hello, everyone in World!')
// });

// app.listen(PORT, () => console.log(`Listening on ${ PORT }`));



async function startServer() {

  const app = express();

  await loaders(app);

  app.listen(PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
  console.log(`Listening on ${ PORT }`)
  });
}

startServer();
