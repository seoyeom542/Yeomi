const mongoose    = require('mongoose');

var storeSchema = mongoose.Schema({
    writer: String,
    storeName: String,
    roadName: String,
    storeNumber: String,
    storeX: String,
    storeY: String
});

module.exports = mongoose.model('store', storeSchema);