var STAGE = {
	INIT : 0,
	FIRST : 1,
	SECOND : 2,
};

var PHASE = {
	CHARGE : 0,
	USERATK : 1,
	MONATK : 2,
	CLEAR : 3,
};

var stg = STAGE.INIT;
var phs = PHASE.CHARGE;
var shake = 0;

window.onload = function (){
	//shake smartphone
	socket.on("shake",function(data){
		if(stg == STAGE.INIT){
			shake++;
			console.log(shake);
			socket.emit("shakeNum", shake);
		}		
	});
	//user's atack
	socket.on("userAtk",function(data){
		if(stg == STAGE.FIRST){
			var array = data.split(",");
			switchElement(array[1]);
			//show elements
			if (phs == PHASE.CHARGE){
				showElements(array[1]);
			}
		}
	});
}

function stgCtr(){
	if(stg == STAGE.INIT){
		//shake iphone!
		//debug
		shake = 24;
 		if(shake >= shakeNum){//advance next stage
 			socket.emit("advFirst", true);
 			delPrepareDisplay();
       		startTimer();
 			stg = STAGE.FIRST;

      // Added fumi
      document.getElementById("sudBtlBGM").play();
      //document.getElementById("sudBtlBGM").pause();
 		}
	}
	else if(stg == STAGE.FIRST){
		appearFirstMon();
		firstStage();
	} else if (stg == STAGE.SECOND){
		console.log("secnod stage");
	}
}

//first stage
function firstStage() {
	if (phs == PHASE.CHARGE){
		//time limit
		if (numTimer()==-1){
			stopTimer();
			phs = PHASE.USERATK;
		}
	} else if (phs == PHASE.USERATK){
		console.log("user's atk!");
		var dmg = returnDamage();
		//user atack
		userAtkTurn(dmg);
		hideElements();
		//show damage
		if(dmg!=0)showMonDmg(dmg);
		phs = PHASE.MONATK;
	} else if (phs == PHASE.MONATK){
		var hp = mon1AtkTurn();
		//animation reduce user hp
		reduceUserHP(hp);
		startTimer();
		phs = PHASE.CHARGE;
		//nock back monster
		if(mon1HP<0){
			phs = PHASE.CLEAR;
		}
	} else if (phs = PHASE.CLEAR){ //game clear
			console.log("くりああああああああああああ");
	}
	
}
