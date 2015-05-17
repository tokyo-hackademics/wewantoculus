function effectWater(){
	$("#water").fadeIn(1000);
	$("#water").fadeOut(1000);
}

function effectBomb(){
	$("#bomb").fadeIn(1000);
 	$('#bomb').jrumble({
        x: 2,
        y: 2,
        rotation: 1
    });
    $("#bomb").trigger('startRumble');
    $("#bomb").fadeOut(1000);
 }
