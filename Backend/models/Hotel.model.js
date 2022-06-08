import mongoose from "mongoose"
var hotelSchema = mongoose.Schema({
nomhotel: String,
siteweb: String,
localisation: String,
disponibilité:Boolean,
capacité:Number
})
const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel
