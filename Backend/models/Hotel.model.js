import mongoose from "mongoose"
var hotelSchema = mongoose.Schema({
nomhotel: String,
siteweb: String,
localisation: String,
disponibilit√©:Boolean,
capacit√©:Number
})
const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel
