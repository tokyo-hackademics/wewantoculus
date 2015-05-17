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
		ehtml = "<img src='images/index/gs.png' height='100%'/>";	
	} else if(element==ELEMENTS.C){
		ehtml = "<img src='images/index/rc.png' height='100%'/>";	
	} else if(element==ELEMENTS.O){
		ehtml = "<img src='images/index/yo.png' height='100%'/>";	
	}
	

	$("#elementF").append(ehtml);
	//動的にDiv要素を生成する
		/*var cBall = document.createElement('div'); 
		cBall.style.position = "relative";

		//10～269の乱数を発生させる
		//var RandLeft = 10 + Math.random()*260;
		//var RandTop = 10 + Math.random()*260;
		var RandLeft = 0;
		var RandTop = 0;

		//ボールの初期表示位置
		cBall.style.left = RandLeft ;
		cBall.style.top = RandTop ;

		//ボールのイメージ画像を読み込む
		var BallImg = document.createElement('img'); 
		BallImg.src = "images/index/bh.png"; 

		//Divにイメージを組み込む
		cBall.appendChild(BallImg);
		//ゲーム画面にボールレイヤ（Div)を組み込む
		var objBody = $("#elementF").parent("div");
		objBody.appendChild(cBall);*/
}

function showMonDmg(dmg){
	$("#mondamage").html(dmg);
	$("#mondamage").fadeIn("fast");
}

function reduceUserHP(hp){
	var per = hp/def_userHP*28;
            $("#life").animate({
                width: "10%",
                height: per+"%",
                bottom: 25,
            }, 200 );
}