//db를 추가하는 함수입니다.
function serchDb() {
    console.log("hello");

    const type = document.getElementById('serchType').value;
    const sKey = document.getElementById('serching').value;

    console.log(sKey);
    console.log(type);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/api/storeDB/serchKey?serchId="+sKey+"&type="+type, true);
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        console.log('this.readyState: ', this.readyState);
        console.log('this.state:', this.state); 
        
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            const responseList = JSON.parse(this.response);
            console.log(responseList.length);
            console.log(responseList);

            if(responseList.length==0){
                alert("검색결과가 존재하지 않습니다.!!!");
            }else{
                for (var i = 0; i <= responseList.length; i++) {
                    document.getElementById("resultList").innerHTML+=(i+1)+"."+responseList[i].storeName+responseList[i].storeNumber+"<br>";
                }
            }
        }

    }

    xhr.send(null);

}