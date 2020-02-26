const mongoose    = require('mongoose');

var storeSchema = mongoose.Schema({
    storeName: String,
    roadAdress: String,
    storeNumber: String,
    storeX: String,
    storeY: String
});

module.exports = mongoose.model('store', storeSchema);