const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { petController } = require('../controllers');



router.get('/', petController.getPets);


router.get('/:petId', petController.getOnePet);
router.post('/create', auth(), petController.createPet);
router.put('/:petId/edit', auth(), petController.editPet);

router.patch('/my-favorites', auth(), petController.aggPetToFavorite);



module.exports = router