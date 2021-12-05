const mongoose = require("mongoose");

const db = mongoose
    .connect("mongodb://localhost:27017/omdb")
    .then(() => console.log("Conectado a MongoDB..."))
    .catch(() => console.log("No se pudo concetar con MongoDB...", err));

module.exports = db;
