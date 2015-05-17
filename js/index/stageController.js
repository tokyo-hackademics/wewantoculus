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
	FINISH : 4,
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
		//shake = 24;
 		if(shake >= shakeNum){//advance next stage
 			socket.emit("advFirst", true);
 			delPrepareDisplay();
       		startTimer();
 			stg = STAGE.FIRST;

     	 // Added fumi
     	 //var audio = new Audio();
		 //audio.src = '../../sounds/BGM165-141031-taigunnnogekitotsu-wav.wav';
		 //audio.play();

     	//document.getElementById("#sudBtlBGM").play();
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

var sleepF = false;
//first stage
function firstStage() {
	if (phs == PHASE.CHARGE){
		//time limit
		if (numTimer()==-1){
			stopTimer();
			phs = PHASE.USERATK;
		}
	} else if (phs == PHASE.USERATK){
		//sleep
		if(! sleepF) {
        	sleepF = true;
        	console.log("user's atk!");
		var dmg = returnDamage();
		//user atack
		userAtkTurn(dmg);
		hideElements();
		//show effects
		if(returnWater()) effectWater();
		if(returnBomb()) effectBomb();
		//show damage
		showMonDmg(dmg);
		initElements();
        	var sleepID = setInterval(function() {
            	sleepF = false;
            	phs = PHASE.MONATK;
            	clearInterval(sleepID);
        	}, 2500);
    	}
	} else if (phs == PHASE.MONATK){
			var hp = mon1AtkTurn();
			//animation reduce user hp
			showMonAtk();
			reduceUserHP(hp);
			startTimer();
			phs = PHASE.CHARGE;
		//nock back monster
		if(mon1HP<0){
			phs = PHASE.CLEAR;
		}
	} else if (phs = PHASE.CLEAR){ //game clear
		disapearFirstMon();
		$("#win").fadeIn("slow");
		phs = PHASE.FINISH;
		stg = STAGE.SECOND;
	} else {

	}
	
}
