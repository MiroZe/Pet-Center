const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { petController } = require('../controllers');



router.get('/', petController.getPets);


router.post('/create', auth(), petController.createPet);
router.get('/my-favorites', auth(), petController.getMyFavoritePets);
router.patch('/my-favorites', auth(), petController.aggPetToFavorite);
router.get('/myPets', auth(), petController.getMyPets);
router.get('/:petId', petController.getOnePet);
router.put('/:petId/edit', auth(), petController.editPet);



module.exports = router