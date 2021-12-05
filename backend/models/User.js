const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: {
        type: Array,
        default: []
    },
    state: {
        type: Boolean,
        default: true
    }
});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

module.exports = mongoose.model("User", userSchema);

