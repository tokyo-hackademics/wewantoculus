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

//show elements
var ehtml = 0;
function showElements(element){
	if(element==ELEMENTS.H){
		ehtml = "<img src='images/index/bh.png' height='100%'/>";	
	} else if(element==ELEMENTS.S){
		ehtml = "<img src='images/index/ys.png' height='100%'/>";	
	} else if(element==ELEMENTS.C){
		ehtml = "<img src='images/index/rc.png' height='100%'/>";	
	} else if(element==ELEMENTS.O){
		ehtml = "<img src='images/index/go.png' height='100%'/>";	
	}

	$("#elementF").append(ehtml);
}

function hideElements(){
	$("#elementF").fadeIn("fast");
	$("#elementF").html("");
}

function showMonDmg(dmg){
	$("#mondamage").html(dmg);
	$('#mondamage').fadeIn(700,function(){$(this).fadeOut(1000)});
}

function reduceUserHP(hp){
	var per = hp/def_userHP*28;
            $("#life").animate({
                width: "10%",
                height: per+"%",
                bottom: 25,
            }, 200 );
}