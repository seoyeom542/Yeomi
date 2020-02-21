// [LOAD PACKAGES]

var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/storeDB');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});


//스키마 생성
var sttore = mongoose.Schema({
    storeName: String,
    roadAdress: String,
    storeNumber: Number,
    storeX: Number,
    storeY: Number
});

//스키마 모델 함수 컴파일
var Store = mongoose.model('Schema', store);

//newStore를 생성해서 값을 입력
var newStore = new Store({storeName:'Hong Gil Dong', soadAdress:'서울시 강남구 논현동', storeNumver:'22', storeX:'33', storeY:'33'});

//데이터 저장
newStore.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('Saved!')
    }
});

//전체 데이터 가져오기
Store.find(function(error, stores){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(students);
    }
})

//특정 데이터 가져오기
Store.find(function(error, stores){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(students);
    }
})

})

// 특정아이디 수정하기
Store.findById({_id:'585b777f7e2315063457e4ac'}, function(error,store){
    console.log('--- Update(PUT) ---');
    if(error){
        console.log(error);
    }else{
        store.storeName = '--modified--';
        store.save(function(error,modified_store){
            if(error){
                console.log(error);
            }else{
                console.log(modified_store);
            }
        });
    }
});

//삭제

