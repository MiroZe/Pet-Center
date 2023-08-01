const { petModel,userModel } = require('../models');
;


// function getPets(req, res, next) {
//     petModel.find()
//         .populate('userId')
//         .then(pets => res.json(pets))
//         .catch(next);
// }



function getPets(req, res, next) {
   
    const type = req.query['type'];
    if(type) {
        petModel.find({type: type})
        .populate('userId')
        .then(pets => res.json(pets))
        .catch(next);
    } else {

        petModel.find()
            .populate('userId')
            .then(pets => res.json(pets))
            .catch(next);
    }
}


function getOnePet(req, res, next) {
    const { petId } = req.params;

    petModel.findById(petId)
        .populate('owner')
        .then(pet => res.json(pet))
        .catch(next);
}

function createPet(req, res, next) {
    const { type,breed,name,image,gender,age,location,email,description,tel } = req.body;
    const { _id: userId } = req.user;

    petModel.create({ type,breed,name,image,gender,age,location,email,description,tel,owner:userId})
        .then(pet => {
             res.status(200).json(pet)
        })
        .catch(next);
}

function deletePet(req,res,next) {
    const { petId } = req.params
    petModel.findByIdAndDelete(petId).then(pet => res.status(200).json(pet)).catch(next)
}

function editPet(req,res,next) {
    const { petId } = req.params
    const petData = req.body
    petModel.findByIdAndUpdate(petId, petData)
    .then(petData => res.status(200).json(petData)).catch(next)
}

function aggPetToFavorite(req,res,next) {
    const { petId } = req.body;
    const { _id: userId } = req.user;

    userModel.findByIdAndUpdate(userId, {$push: {favorites: petId}}, { new: true })
    .then(userData => {
        
        res.status(200).json(userData)}).catch(next)
}

function getMyPets(req,res,next) {
    const { _id: userId } = req.user;
    petModel.find({owner:userId})
    .then(pets => {res.status(200).json(pets)}).catch(next)
}




module.exports = {
    getPets,
    getOnePet,
    createPet,
    deletePet,
    editPet,
    aggPetToFavorite,
    getMyPets
    
}
