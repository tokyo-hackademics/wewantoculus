//connect soket
var socket = io.connect(location.origin);

var STAGE = {
	INIT : 0,
	FIRST : 1,
	SECOND : 2,
};

var stg = STAGE.INIT;
var name = 'none';


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

function sordAcction(x){
    if (accelFlag(x)){
		    socket.emit("sendAtk", name + "," +Math.random()*4);
    }
}

function shakeAcction(x){
    if (accelFlag(x)){
        socket.emit("shakeTrue", true);
    }
}

function loadGet(){
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

function putAccelNum(x,y,z){
    document.getElementById("accelNum").innerHTML =
        "Accel："+ calcEval(x,y,z) +"<br>";
}

function putAccelPanel(x,y,z){
    if (accelFlag(x)){
        document.getElementById("accelPanel").innerHTML =
            "<div id='redBox'></div><br>";
    }else{
        document.getElementById("accelPanel").innerHTML =
            "<div id='blueBox'></div><br>";
    }

}

function stgCtr(){
	if(stg == STAGE.INIT){
		//shake iphone!
 		if(shake == shakeNum)stg = STAGE.FIRST;
	}
	else if(stg == STAGE.FIRST){
		firstStage();
	} else if (stg == STAGE.SECOND){
		console.log("secnod stage");
	}
}

window.addEventListener("devicemotion", function(event){
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;

    // set Accel Num and Panel for Debug
    putAccelNum(x,y,z);
    putAccelPanel(x,y,z);

    // Acction
		if(stg == STAGE.INIT){
        shakeAcction(x);
		}else{
        sordAcction(x);
    }

}, true);

window.onload = function (){
    // num of shake
	  socket.on("shakeNum",function(data){
		    if(stg == STAGE.INIT){
            document.getElementById("shakeNum").innerHTML =
                "shakeNum:" + data + "<br>";
		    }
	  });

    // load Get data
    loadGet();

    // put user name for Debug
    document.getElementById("name").innerHTML = "Name:" + name;

    // set Accel Num and Panel for Debug
    putAccelNum();
    putAccelPanel();

    // stage controller
	  setInterval("stgCtr()",50);
}
