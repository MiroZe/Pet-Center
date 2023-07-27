const { petModel } = require('../models');
;


function getPets(req, res, next) {
    petModel.find()
        .populate('userId')
        .then(themes => res.json(themes))
        .catch(next);
}

function getOnePet(req, res, next) {
    const { petId } = req.params;

    themeModel.findById(petId)
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



module.exports = {
    getPets,
    getOnePet,
    createPet,
    deletePet
    
}
