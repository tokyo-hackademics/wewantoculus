//connect socket
var socket = io.connect(location.origin);

//controller event
var str = "い";

var h = 0;
var s = 0;
var c = 0;
var o = 0;

var hho = 0;
var hhsoooo = 0;


function switchElement(element){
	console.log(element);
	//count elements
	switch(parseInt(element)){
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
	str = str + "い"
	$("#str").html(str);
}

//creating compound
function createCompound(){
	var flg = false;
	while(true){
		if(h >= 2 && s >=1 && o>=4) { //H2SO4
			hhsoooo++;
			h -= 2;
			s -= 1;
			o -= 4;
		} else if (h >=2 && o) { //H2O
			hho++;
			h -= 2;
			o -= 1;
		}else {
			flg = true;
		}
		if(flg)break;
	}
}

function calcDamage(){
	var dmg = 0;
	dmg += hhsoooo * 3;
	dmg += hho * 2;
	if(c>5) {
		dmg += c*3;
	} else {
		dmg += c*2;
	}
	//log
	console.log("H2SO4:"+hhsoooo);
	console.log("H2O:"+hho);
	console.log("c:"+c);
	console.log("dmg:"+dmg);
	return dmg;
}

//init elements
function initElements(){
	h = 0;
	s = 0;
	c = 0;
	o = 0;
	hho = 0;
	hhsoooo = 0;
}
//return damage
function returnDamage(){
	var dmg;
	createCompound();
	dmg = calcDamage();
	initElements();
	return dmg;
}