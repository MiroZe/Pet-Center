const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getPets);


router.get('/:petId', petController.getPets);
router.post('/:petId', auth(), petController.createPet);
//router.put('/:petId', auth(), themeController.subscribe);

router.delete('/:petId', auth(), petController.deletePet);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router