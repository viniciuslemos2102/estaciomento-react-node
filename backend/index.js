const app = require('./bin/express')
const Parking = require('./module/parking/parking-schema')
const monent = require('moment')
const port = 3000

app.get('/', async (req, res) => {
  const pk = await Parking.create({
    vehicle : 'Celta Braco',
    vehiclePlate: 'AAA-7376',
    parkingStartAt: monent(),
    princePerHour: 10
  })

  const all = await Parking.find()
    res.status(200).send(all)

});

app.listen(port, () => {
  console.log(`Api initialize success in port ${port}`)
})