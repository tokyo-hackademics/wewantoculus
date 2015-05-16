var STAGE = {
	INIT : 0,
	FIRST : 1,
	SECOND : 2,
};

var PHASE = {
	CHARGE : 0,
	USERATK : 1,
	MONATK : 2
};

var stg = STAGE.INIT;
var phs = PHASE.CHARGE;

function stgCtr(){
	if(stg == STAGE.INIT){
		stg = STAGE.FIRST;
	}
	else if(stg == STAGE.FIRST){
		firstStage();
	} else if (stg == STAGE.SECOND){
		console.log("secnod stage");
	}
}

//first stage
function firstStage() {
	if (phs == PHASE.CHARGE){
		//time limit
		if (numTimer()==0){
			stopTimer();
			phs = PHASE.USERATK
		}
	} else if (phs == PHASE.USERATK){
		console.log("user's atk!");
		userAtkTurn();
		phs = PHASE.MONATK;
	} else if (phs == PHASE.MONATK){
		mon1AtkTurn();
		startTimer();
		phs = PHASE.CHARGE;
	}
	
}