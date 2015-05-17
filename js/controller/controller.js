//connect soket
var socket = io.connect(location.origin);

var STAGE = {
    WAIT : 0,
    SHK : 1,
    WEP : 2,
    RST : 3,
};

var stg = STAGE.WAIT;
var name = 'none';
var sleepF = false;
var sleepTime = 1000;
var slider = "";

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
        var elem = slider.getCurrentSlide();
		    socket.emit("sendAtk", name + "," + elem);
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

function advStg(){
		if(stg == STAGE.WAIT){
        stg = STAGE.SHK
        document.getElementById("WAIT").style.display="none";
        document.getElementById("SHK").style.display="block";
		}else if(stg == STAGE.SHK){
        stg = STAGE.WEP
        document.getElementById("SHK").style.display="none";
        document.getElementById("WEP").style.display="block";
    }else if(stg == STAGE.WEP){
        stg = STAGE.SHK
        document.getElementById("WEP").style.display="none";
        document.getElementById("RST").style.display="block";
    }else if(stg == STAGE.RST){
        stg = STAGE.SHK
        document.getElementById("RST").style.display="none";
        document.getElementById("SHK").style.display="block";
    }
}

window.addEventListener("devicemotion", function(event){
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;

    // set Accel Num and Panel for Debug
    putAccelNum(x,y,z);
    putAccelPanel(x,y,z);

    // Action
		if(stg == STAGE.WAIT){
		}else if(stg == STAGE.SHK) {
        shakeAcction(x);
		}else if(stg == STAGE.WEP && (! sleepF) ) {
        sordAcction(x);
        sleepF = true;
        var sleepID = setInterval(function() {
            sleepF = false;
            clearInterval(sleepID);
        }, sleepTime);
    }

}, true);

window.onload = function (){
    // num of shake
	  socket.on("sNum",function(data){
		    if(stg == STAGE.SHK){
            document.getElementById("shakeNum").innerHTML =
                "shakeNum:" + data + "<br>";
            //meter animation
            var per = data/shakeNum*100;
            $("#meterImg").animate({
                width: "100%",
                height: per+"%",
                bottom: 0,
            }, 100 );
		    }
	  });

    // advance Flag
	  socket.on("advF",function(data){
		    if(stg == STAGE.SHK){
            advStg();
		    }
	  });

    document.getElementById("WAIT").style.display="none";
    document.getElementById("SHK").style.display="none";
    document.getElementById("WEP").style.display="none";
    document.getElementById("RST").style.display="none";

    // load Get data
    loadGet();

    // // put user name for Debug
    // document.getElementById("name").innerHTML = "Name:" + name;

    // // set Accel Num and Panel for Debug
    // putAccelNum();
    // putAccelPanel();

    $("#WAIT").show();
}
