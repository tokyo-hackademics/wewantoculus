//connect soket
var socket = io.connect(location.origin);

var name = 'none'

function calcMerge(x,y){
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
}

function calcEval(x,y,z){
    return calcMerge(calcMerge(x,y),z);
}

function accelFlag(x){
    if(x > accleThresh){ return true; }
    return false;
}

var acF = false;

window.addEventListener("devicemotion", function(event1){
    var x = event1.acceleration.x;
    var y = event1.acceleration.y;
    var z = event1.acceleration.z;

    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");

//    var name = document.getElementById("id_box").value

    result1.innerHTML =
        "xyz："+ calcEval(x,y,z) +"<br>";

    result2.innerHTML =
        calcEval(x,y,z);

    if (accelFlag(x) || acF){
        result2.innerHTML = "<div id='okBox'></div><br>";
		    socket.emit("sendAtk", name + "," +Math.random()*4);
    }else{
        result2.innerHTML = "<div id='badBox'></div><br>";
    }

    document.getElementById("result3").innerHTML = "Name:" + name;

}, true);

function getdata(){
    if(window.location.search){
        var dataList = window.location.search.substring(1,window.location.search.length).split("&")

        for (var i = 0; i < dataList.length; i++) {
            key = dataList[i].split("=")[0]
            value = dataList[i].split("=")[1]

            if(key == 'name'){
                name = value
            }
        }

    }
}
/* オンロード時に実行 */
window.onload = getdata;


function delete_form(frm){
    frm.elements["id_btn"].style.display="none";
    frm.elements["id_box"].style.display="none";
}
