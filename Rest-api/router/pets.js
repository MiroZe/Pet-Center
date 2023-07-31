const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getPets);


router.get('/:petId', petController.getOnePet);
router.post('/create', auth(), petController.createPet);
router.put('/:petId/edit', auth(), petController.editPet);

router.delete('/:petId/delete', auth(), petController.deletePet);



module.exports = router