const mongoose    = require('mongoose');

var storeSchema = mongoose.Schema({
    storeName: String,
    roadAdress: String,
    storeNumber: Number,
    storeX: Number,
    storeY: Number
});

module.exports = mongoose.model('store', storeSchema);