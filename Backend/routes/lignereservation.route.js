import express from 'express';
const router = express.Router();
import { getLigneReservations, getLigneReservationByID, createLigneReservation,
updateLigneReservation, deleteLigneReservation,getLigneReservationByIdCom } from
'../controllers/ligneReservation.controller.js';
/**
 * @route GET /api/ligneReservations
 * @desc Get All ligneReservations
 * @access Public
 */
router.get('/', getLigneReservations);
/**
 * @route POST /api/ligneReservations
 * @desc Ajouter une ligneReservation
 * @access Public
 */
router.post('/', createLigneReservation);
/**
 * @route GET /api/ligneReservations/:id
 * @desc Renvoyer une ligneReservation
 * @access Public
 */
router.get('/:id', getLigneReservationByID);
/**
 * @route PUT /api/ligneReservations/:id
 * @desc Modifier une ligneReservation
 * @access Public
 */
router.put('/:id', updateLigneReservation);
/**
 * @route DELETE /api/ligneReservations/:id
 * @desc Supprimer une ligneReservation
 * @access Public
 */
router.delete('/:id', deleteLigneReservation);
/**
 * @route GET /api/ligneReservations/comm/ :refreservation
 * @desc Get All ligneReservations pour une Reservation donnée
 * @access Public
 */
router.get('/comm/:refreservation', getLigneReservationByIdCom);
export default router; 