import express from 'express';
const router = express.Router();
import { getReservations, getReservationByID, createReservation, updateReservation,
deleteReservation } from '../controllers/Reservation.controller.js';
/**
 * @route GET /api/reservations
 * @desc Get All reservations
 * @access Public
 */
router.get('/', getReservations);
/**
 * @route POST /api/reservations
 * @desc Ajouter un reservation
 * @access Public
 */
router.post('/', createReservation);
/**
 * @route GET /api/reservations/:id
 * @desc Renvoyer un reservation
 * @access Public
 */
router.get('/:id', getReservationByID);
/**
 * @route PUT /api/reservations/:id
 * @desc Modifier un reservation
 * @access Public
 */
router.put('/:id', updateReservation);
/**
 * @route DELETE /api/reservations/:id
 * @desc Supprimer un reservation
 * @access Public
 */
router.delete('/:id', deleteReservation);
export default router;