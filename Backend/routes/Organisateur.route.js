import express from 'express';
const router = express.Router();
import { getOrganisateurs, getOrganisateurByID, createOrganisateur, updateOrganisateur, deleteOrganisateur }
from '../controllers/Organisateur.controller.js';
/**
* @route GET /api/Organisateurs
* @desc Get All Organisateurs
* @access Public
*/
router.get('/', getOrganisateurs);
/**
* @route POST /api/Organisateurs
* @desc Ajouter un Organisateur
* @access Public
*/
router.post('/', createOrganisateur);
/**
* @route GET /api/Organisateurs/:id
* @desc Renvoyer un Organisateur
* @access Public
*/
router.get('/:id', getOrganisateurByID);
/**
* @route PUT /api/Organisateurs/:id
* @desc Modifier un Organisateur
* @access Public
*/
router.put('/:id', updateOrganisateur);
/**
* @route DELETE /api/Organisateurs/:id
* @desc Supprimer un Organisateur
* @access Public
*/
router.delete('/:id', deleteOrganisateur);
export default router;