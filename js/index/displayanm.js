//準備中のレイヤー消去
function delPrepareDisplay(){
	$("#prepare").fadeOut("slow");
	$("#shake").fadeOut("slow");
}

//Lv.1でのモンスター登場アニメーション
function appearFirstMon(){
	appearTimer();
	$("#ghost").fadeIn("slow");
	$("#slug").fadeIn("slow");
	$("#trg_ghost").fadeIn("slow");
	$("#trg_slug").fadeIn("slow");
}

//show timer
function appearTimer(){
	$("#timer").fadeIn("slow");
}

function reduceUserHP(hp){
	var per = hp/def_userHP*28;
            $("#life").animate({
                width: "10%",
                height: per+"%",
                bottom: 25,
            }, 200 );
}