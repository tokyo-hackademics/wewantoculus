//connect socket
var socket = io.connect(location.origin);

//controller event
var str = "い";

var h = 0;
var s = 0;
var c = 0;
var o = 0;

window.onload = function(){
	socket.on("userAtk",function(data){
		//count elements
		switch(data){
			case ELEMENTS.H:
				h++;
				break;
			case ELEMENTS.S:
				s++;
				break;
			case ELEMENTS.C:
				c++;
				break;
			case ELEMENTS.O:
				o++;
				break;
			default:
				break;
		}
		
		console.log(s);
		str = str + "い"
		$("#str").html(str);
	});
};

//init elements
function initElements(){
	h = 0;
	s = 0;
	c = 0;
	o = 0;
}
//return damage
function returnDamage(){
	var dmg;
	dmg = s;
	initElements();
	return dmg;
}