import mongoose from "mongoose"
var reservationSchema = mongoose.Schema({
 total: Number,
 refclient: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Client'
 }
 },
 {
 timestamps: true
 });
const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation