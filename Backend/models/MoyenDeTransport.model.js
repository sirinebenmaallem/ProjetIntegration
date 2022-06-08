import mongoose from "mongoose"
var MoyenDeTransportSchema = mongoose.Schema({
nomsmoyenT: String
})
const MoyenDeTransport = mongoose.model('MoyenDeTransport', MoyenDeTransportSchema);
export default MoyenDeTransport