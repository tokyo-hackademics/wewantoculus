//connect socket
var socket = io.connect(location.origin);

$(function(){
	$("#main").click(function(){
		//send server
		socket.emit("tapDown", 1);
	});
});

window.addEventListener("devicemotion", function(event1){
    var x = event1.acceleration.x;
    var y = event1.acceleration.y;
    var z = event1.acceleration.z;

    var result1 = document.getElementById("result");
    result1.innerHTML =
        "X："+ Math.round(x * 10) / 10 +"<br>" +
        "Y："+ Math.round(y * 10) / 10 +"<br>" +
        "Z："+ Math.round(z * 10) / 10;
}, true);
