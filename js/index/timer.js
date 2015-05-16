var timeStart = 0;
var time = timeLimit;

window.onload = function() {
	startTimer();
}

function startTimer(){
	setInterval("showTimer()",1000);
}

function showTimer(){
	$("#timer").html(time);
	time -= 1;
	if(time==-1){//time lmit!!!
		//user's atack
		userAtk();

		//monster's atack


		//next turn
		time = timeLimit;
	}
}