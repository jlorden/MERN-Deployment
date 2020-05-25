const { Pet } = require('../models/pet.model')

module.exports.addPet = (req, res) => {
    const { name, petType, description, skillOne, skillTwo, skillThree } = req.body;
    Pet.create({
        name,
        petType,
        description,
        skillOne,
        skillTwo,
        skillThree

    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err))
}

module.exports.viewOnePet = (req, res) => {
    Pet.findById({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.updateOnePet = (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(newPet => res.json(newPet))
        .catch(err => res.json(err));
}

module.exports.DeleteOnePet = (req, res) => {
    Pet.findByIdAndDelete({ _id: req.params.id })
        .then(adopted => res.json(adopted))
        .catch(err => res.json(err))
}