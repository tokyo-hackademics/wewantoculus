function userAtkTurn(){
	mon1HP = mon1HP - returnDamage();
	$("#monHP").html(mon1HP);
}