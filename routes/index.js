// routes/index.js
module.exports = function (app, Store) {

    // GET ALL store
    app.get('/api/storeDB', function (req, res) {
        Store.find({},  {storeName:1, roadName:1, storeNumber:1}, function (error, cursor) {
            if(error){
                console.error(error);
                return res.status(500).send({message: error});
            }
            return res.status(200).send(cursor);
        });
    });

    // GET SINGLE store
    app.get('/api/storeDB/:store_id', function (req, res) {
        res.end();
    });

    // GET BOOK BY AUTHOR
    app.get('/api/storeDB/storeName/:storeName', function (req, res) {
        res.status(200).send(req.params.storeName);
    });

    // CREATE store
    app.post('/api/storeDB', function (req, res) {
        // db create
        let store = new Store();

        store.storeName = req.body.storeName;
        store.roadName = req.body.roadName;
        store.storeNumber = req.body.storeNumber;
        store.storeX = req.body.storeX;
        store.storeY = req.body.storeY;

        store.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }else{
                console.log("정상적으로 등록되었습니다.")
            }
            res.json({status: 200, result: 1});
        });
    });

    // UPDATE THE store
    app.put('/api/storeDB/:store_id', function (req, res) {
        res.end();
    });

    // DELETE store
    app.delete('/api/storeDB/:store_id', function (req, res) {
        res.end();
    });

}