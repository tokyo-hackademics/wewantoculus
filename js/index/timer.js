var timeStart = 0;
var time = timeLimit;
var timer;

startTimer();

function startTimer(){
	timer = setInterval("atkTimer()",1000);
}

function stopTimer(){
	clearInterval(timer);
	time = timeLimit;
}

function atkTimer(){
	$("#timer").html(time);
	time -= 1;
	if(time<0){
		//next turn
		time = 0;
	}
}

function numTimer(){
	return time;
}