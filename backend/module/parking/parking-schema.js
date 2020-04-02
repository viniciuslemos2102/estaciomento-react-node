const mongoose =  require('mongoose');

const parkingSchema = mongoose.Schema({
  vehicle: {
    type: String,
    require: true
  },
  vehiclePlate: {
    type: String,
    require: true,
  },
  parkingStartAt: {
    type: Date,
    require: true
  },
  parkingEndAt: Date,
  princePerHour: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true},
  toObjects: { virtuals: true}
})

parkingSchema.index({ vehicle: 1, vehiclePlate: 1, parkingStartAt: 1 })

parkingSchema.virtual('parkingCost').get(function (){
  const costPerMinute = this.princePerHour / 60
  const _parkindEndAt = this.parkindEndAt ? monent(this.parkingEndAt) : monent()
  const _parkindStartAt = monent(this.parkingStartAt)
  const diffMinutes = _parkindEndAt.diff(_parkindStartAt, 'minute')
  if (diffMinutes > 0)
    return (costPerMinute *  diffMinutes ).toFixed(2)
  else
    return (0.00).toFixed(2)   
})

module.exports = mongoose.model('parking', parkingSchema)