const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController.js');

router.post('/', petController.createPet);
router.get('/', petController.getPets);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatepet);
router.delete('/:id', petController.deletePet);

module.exports = router;