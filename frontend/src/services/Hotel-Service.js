import Axios from "../Axios/Api";
const HOTEL_API="/hotels"
 const fetchHotels=async()=> {
 return await Axios.get(HOTEL_API);
 }

 export const HotelService = {
 fetchHotels
 }
