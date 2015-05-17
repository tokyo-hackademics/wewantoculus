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

function disapearFirstMon(){
	disappearTimer();
	$("#ghost").fadeOut("slow");
	$("#slug").fadeOut("slow");
	$("#trg_ghost").fadeOut("slow");
	$("#trg_slug").fadeOut("slow", function(){$("#trg_slug").hide();});	
}

//show timer
function appearTimer(){
	$("#timer").fadeIn("slow");
}

function disappearTimer(){
	$("#timer").fadeOut("slow");
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
	if(dmg!=0)$("#mondamage").html(dmg);
	else $("#mondamage").html("MISS!");
	$('#mondamage').fadeIn(700,function(){$(this).fadeOut(1000)});
}

var demoTimeout;
function showMonAtk(){
	$('#stage1').jrumble({
        x: 2,
        y: 2,
        rotation: 1
    });
    //$("#stage1").trigger('startRumble');

	$this = $("#stage1");
	clearTimeout(demoTimeout);
	$this.trigger('startRumble');
	demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 1000);

	$('#eneata').fadeIn(400,function(){$(this).fadeOut(500)});
	
}

function reduceUserHP(hp){
	var per = hp/def_userHP*28;
            $("#life").animate({
                width: "10%",
                height: per+"%",
                bottom: 25,
            }, 200 );
}