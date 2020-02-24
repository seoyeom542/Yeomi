// routes/index.js

module.exports = function (app, Store) {
    // GET ALL BOOKS
    app.get('/api/storeDB', function (req, res) {
        res.send('ok');
    });

    // GET SINGLE BOOK
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
        console.log('req.body:', req.body);
        //res.status(200).send(req.body.name);

        const store = new Store();
        store.storeName = req.body.storeName;
        store.roadName = req.body.roadName;
        store.storeNumber = req.body.storeNumber;

        store.save(function (err) {
            if (err) {
                console.error(err);
                res.json({ result: 0 });
                return;
            }
            res.json({ result: 1 });
        });

    });

    // UPDATE THE BOOK
    app.put('/api/storeDB/:store_id', function (req, res) {
        res.end();
    });

    // DELETE BOOK
    app.delete('/api/storeDB/:store_id', function (req, res) {
        res.end();
    });

}