const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pets', PetController.addPet);
    app.get('/api/pets/:id', PetController.viewOnePet);
    app.put('/api/pets/:id', PetController.updateOnePet);
    app.delete('/api/pets/:id', PetController.DeleteOnePet);
}