// routes/index.js
module.exports = function (app, Store) {

    // GET ALL store
    app.get('/api/storeDB', function (req, res) {
        res.send('ok');
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
        console.log('req.body: ', req.body);
        console.log('req.body.storeName:', req.body.storeName);
        console.log('req.body.storeX: ', req.body.storeX);
        // res.status(200).send('create success');

        let store = new Store();

        store.storeName = req.body.storeName;
        store.roadName = req.body.roadName;
        store.storeNumber = req.body.storeNumber;
        store.storeX = req.boy.storeX;
        store.storeY = req.boy.storeY;

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