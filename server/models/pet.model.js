const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "This name is already taken"],
        required: [true, "Your Pet name is required"],
        minlength: [3, "The Pet name must be at least 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "The type of Pet is required"],
        minlength: [3, "The Pet type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description of your Pet"],
        minlength: [3, "The description of your Pet must be at least 3 characters long"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
}, { timestamps: true })

module.exports.Pet = mongoose.model("Pet", petSchema)