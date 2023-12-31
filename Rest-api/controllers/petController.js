const { query } = require('express');
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

function addPetToFavorite(req,res,next) {
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

function getMyFavoritePets(req,res,next) {
    const { _id: userId } = req.user;
    
    
    userModel.findById(userId).populate('favorites')
    .then((favorites) => {
      res.status(200).json(favorites);
    })
    .catch(next);
}

function searchPets(req,res,next) {
 
    const query = req.query.search;
    const type = req.query.type;


    if(type === 'breed') {

        petModel.find().where({breed: {$regex:new RegExp(query, 'i')}})
        .then(pets => {res.status(200).json(pets)}).catch(next)
                        
    } else if(type === 'location' ) {
        petModel.find().where({location: {$regex:new RegExp(query, 'i')}})
        .then(pets => {res.status(200).json(pets)}).catch(next)
    }



}

function removePetFromFavorite(req,res,next) {
    const { petId } = req.body;
    const { _id: userId } = req.user;

    userModel.findByIdAndUpdate(userId, {$pull: {favorites: petId}}, { new: true })
    .then(userData => {
        
        res.status(200).json(userData)}).catch(next)
}

                                      

function sendMessage(req,res,next) {
    const { _id: userId } = req.user;
    const {ownerId, text, date} = req.body
   

    userModel.findByIdAndUpdate(ownerId, {$push: {messages: {username: userId, message:text, postedOn: date }}})
    .then(userData => {
        res.status(200).json(userData)}).catch(next)
    
}

function getMessages(req,res,next) {
    const { _id: userId } = req.user;
    
   

    userModel.findById(userId).populate('messages.username')
    .then(userData => {
        res.status(200).json(userData)}).catch(next)
    
}

function deleteMessage(req,res,next) {
    const {messageId } = req.body;
    const { _id: userId } = req.user;

    

    userModel.findByIdAndUpdate(userId, {$pull: {messages: {_id: messageId}}}, { new: true })
    .then(userData => {
        
        res.status(200).json(userData)}).catch(next)
}

                                      


module.exports = {
    getPets,
    getOnePet,
    createPet,
    deletePet,
    editPet,
    addPetToFavorite,
    getMyPets,
    getMyFavoritePets,
    searchPets,
    removePetFromFavorite,
    sendMessage,
    getMessages,
    deleteMessage
    
}

