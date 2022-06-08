import mongoose from "mongoose"
var ligneReservationSchema = mongoose.Schema({
    nbrReservation: Number,
    totligne: Number,
 refarticle: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'VoyageOrganise'
 },
 refreservation: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Reservation'
 },
})
const LigneReservation = mongoose.model('LigneReservation', ligneReservationSchema);
export default LigneReservation