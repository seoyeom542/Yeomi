let storeName, storeNumber, roadName, menu, storeX, storeY, id, writer;
//const button = "<a href='/result.html'><button id='inputb'>정보보기</button></a>";

let num = 1;

//모든 리스트를 보여주는 함수
function getData() {
    console.log('getData!!!!!!')
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/storeDB', true);
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            const responseData = JSON.parse(this.response);
            console.log(responseData);
            //list를 출력하는 for
            for (var i = 0; i <= responseData.length; i++) {
                storeName = responseData[i].storeName;
                storeNumber = responseData[i].storeNumber;
                id = responseData[i]._id;
                roadName = responseData[i].roadName;
                storeX = responseData[i].storeX;
                storeY = responseData[i].storeY;
                writer = responseData[i].writer;
                menu = responseData[i].menu;

                const button = `<button id='inputb' onclick='showData("${id}", "${storeName}", "${storeNumber}", "${roadName}", "${storeX}")'>정보보기</button>`;
                document.getElementById("resultList").innerHTML += num + "." + storeName + storeNumber;
                document.getElementById("resultList").innerHTML += button + "<br>";
                num++;
            }
        }
    }
    xhr.send(null);
}
getData()

//db를 검색하는 함수
function serchDb() {
    const type = document.getElementById('serchType').value;
    const sKey = document.getElementById('serching').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/api/storeDB/serchKey?serchId=" + sKey + "&type=" + type, true);
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        console.log('this.readyState: ', this.readyState);
        console.log('this.state:', this.state);

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            document.getElementById('resultList').innerHTML = "";

            // Request finished. Do processing here.
            const responseList = JSON.parse(this.response);
            console.log(responseList.length);
            console.log(responseList);
            //clearDiv();
            if (responseList.length == 0) {
                alert("검색결과가 존재하지 않습니다.!!!");
            } else {
                for (var i = 0; i <= responseList.length; i++) {

                    storeName = responseList[i].storeName;
                    storeNumber = responseList[i].storeNumber;
                    roadName = responseList[i].roadName;
                    storeX = responseList[i].storeX;
                    storeY = responseList[i].storeY;
                    id = responseList[i]._id;
                    writer = responseList[i].writer;
                    menu = responseList[i].menu;

                    const button = `<button id='inputb' onclick='showData("${storeName}", "${storeNumber}", "${roadName}", "${storeX}")'>정보보기</button>`;
                    document.getElementById("resultList").innerHTML += (i + 1) + "." + storeName + storeNumber;
                    document.getElementById("resultList").innerHTML += button + "<br>";
                }
            }
        }

    }
    xhr.send(null);
}

function showData(storeName, storeNumber, roadName, storeX, storeY, id) {
    //지도생성 - 해당 음식점 정보 노출 - 수정/삭제 
    const mainMenu = "주메뉴 : <textarea id='bestM'></textarea><br>"
    const btnUpdate = "<button id='inputb' onclick='updateData(); return false'>수정하기</button>";
    const btndelete = "<button id='inputb' onclick='deleteData() return false'>삭제하기</button>";

    document.getElementById("storeName").value = storeName;
    document.getElementById("roadName").value = roadName;
    document.getElementById("storeNumber").value = storeNumber;

    createMap();
    console.log(roadName);
    document.getElementById('remoteData').innerHTML = mainMenu + btnUpdate + btndelete;
    document.getElementById("bestM").value = menu;
}

function createMap() {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);
}

function updateData() {
    console.log("update data start");
    let menu = document.getElementById('bestM').value;

    var xhr = new XMLHttpRequest();
    //xhr.open('PUT', `/api/storeDB/${id}+${menu}`, true);
    xhr.open('PUT', `/api/updateDB`, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log('this = ', this);
        }
    }
    xhr.send(`id=${id}&menu=${menu}`);
}

function deleteData() {

}