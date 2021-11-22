const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello, everyone in World!')
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
