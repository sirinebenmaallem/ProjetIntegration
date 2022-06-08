import express from 'express';
const router = express.Router();
import { getHotels, getHotelByID, createHotel, updateHotel,
deleteHotel } from '../controllers/hotel.controller.js';
/**
* @route GET /api/Hotels
* @desc Get All Hotels
* @access Public
*/
router.get('/', getHotels);
/**
* @route POST /api/Hotels
* @desc Ajouter un Hotel
* @access Public
*/
router.post('/', createHotel);
/**
* @route GET /api/Hotels/:id
* @desc Renvoyer un Hotel
* @access Public
*/
router.get('/:id', getHotelByID);
/**
* @route PUT /api/Hotels/:id
* @desc Modifier un Hotel
* @access Public
*/
router.put('/:id', updateHotel);
/**
* @route DELETE /api/Hotels/:id
* @desc Supprimer un Hotel
* @access Public
*/
router.delete('/:id', deleteHotel);
export default router;