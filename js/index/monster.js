function mon1AtkTurn(){
	userHP = userHP - mon1Atk;
	console.log("userHP:"+userHP);
	if(userHP<50){
		userHP = 50;
	}
	return userHP;
	//$("#userHP").html(userHP);
}
