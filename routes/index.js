// routes/index.js
module.exports = function (app, Store) {

    // GET ALL store
    app.get('/api/storeDB', function (req, res) {
        Store.find({}, { _id: 1, storeName: 1, roadName: 1, storeNumber: 1, menu: 1, storeX: 1, storeY: 1 }, function (error, cursor) {
            if (error) {
                console.error(error);
                return res.status(500).send({ message: error });
            }
            return res.status(200).send(cursor);
        });
    });

    //FIND IN THE STORE
    app.get('/api/storeDB/serchKey', function (req, res) {
        console.log(req.query);
        let serchKey = req.query.serchId;
        let typeKey = req.query.type;

        //storeName 키값에 serchKey가 포함되어 있는 것을 검색
        if (typeKey == "wName") { //serch in writer
            Store.find({ writer: { $regex: serchKey } }, { _id: 1, storeName: 1, roadName: 1, storeNumber: 1 }, function (error, cursor) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("검색이 정상적으로 처리되었습니다.");
                }
                return res.status(200).send(cursor);;
            })
        } else if (typeKey == "sName") { //serch in storeName
            Store.find({ storeName: { $regex: serchKey } }, { _id: 1, storeName: 1, roadName: 1, storeNumber: 1, writer: 1, storeX: 1, storeY: 1, menu: 1 }, function (error, cursor) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("검색이 정상적으로 처리되었습니다.");
                }
                return res.status(200).send(cursor);;
            })
        } else { //serch in 
            Store.find({ menu: { $regex: serchKey } }, { _id: 1, storeName: 1, roadName: 1, storeNumber: 1, storeX: 1, storeY: 1, writer: 1, menu: 1 }, function (error, cursor) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("검색이 정상적으로 처리되었습니다.");
                }
                return res.status(200).send(cursor);;
            })
        }

    });

    // CREATE store
    app.post('/api/storeDB', function (req, res) {
        console.log("등록시작");
        console.log(req.body);
        let store = new Store();

        store.writer = req.body.writer;
        store.storeName = req.body.storeName;
        store.roadName = req.body.roadName;
        store.storeNumber = req.body.storeNumber;
        store.storeX = req.body.storeX;
        store.storeY = req.body.storeY;
        store.menu = req.body.menu;

        store.save(function (err) {
            if (err) {
                console.error(err);
                res.json({ result: 0 });
                return;
            } else {
                //alert(" 정상적으로 등록되었습니다.");
                console.log("정상적으로 등록되었습니다.")
            }
            res.json({ status: 200, result: 1 });
        });
    });

    // UPDATE THE store
    app.put('/api/updateDB', function (req, res) {
        console.log('req.body = ', req.body);

        const updateData = req.body.menu;
        Store.updateOne({ _id: req.body.id }, { menu: updateData }, function (error, store) {
            if (error) return res.status(500).json({ error: 'database failure' });
            else if (!store) {
                console.log("store not found");
            }
            else {
                console.log("정상적으로 updata 완료!!");
            }
        })
    });

    // DELETE store
    app.delete('/api/deleteDB/:id', function (req, res) {
        const deleteKey = req.params.id;
        console.log("삭제하러 옴 === ", deleteKey);

        Store.deleteOne({ _id: deleteKey }, function (error, cursor) {
            if (error) {
                console.error("error: ");
                return res.status(500).send(error);
            }

            console.log("정상적으로 삭제 되었습니다.");
            return res.status(200).send(cursor);
            
        })
    });

}//end of modle