const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { petController } = require('../controllers');



router.get('/', petController.getPets);


router.post('/create', auth(), petController.createPet);
router.get('/my-favorites', auth(), petController.getMyFavoritePets);
router.patch('/my-favorites/add', auth(), petController.addPetToFavorite);
router.patch('/my-favorites/remove', auth(), petController.removePetFromFavorite);
router.get('/search', auth(), petController.searchPets);
router.get('/myPets', auth(), petController.getMyPets);
router.get('/:petId', petController.getOnePet);
router.put('/:petId/edit', auth(), petController.editPet);
router.delete('/:petId/delete', auth(), petController.deletePet);



module.exports = router