const app = require('./bin/express');
const bodyParser = require('body-parser');
const routerParking = require('./module/parking/routes');
const port = 3333;

app.use(bodyParser.json())
app.use('/api/parking', routerParking)

app.listen(port, () => {
  console.log(`Api initialize success in port ${port}`)
});