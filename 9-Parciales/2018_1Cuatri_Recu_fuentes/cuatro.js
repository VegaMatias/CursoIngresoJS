function mostrar()
{
/*
	en un restaurante, un grupo de amigos quiere saber cuanto debe pagar 
	cada uno del total, recordar que se debe agregar el 10% de propina, y 
	que los precios no incluyen el iba (21%), mostrar toda la informacion en un 
	solo alert
	*/


	var amigos;
	var cuentaTotal;
	var masPropina;
	var aPagarCadaAmigo

	amigos = prompt("Ingrese la cantidad de amigos: ");
	amigos = parseInt(amigos);

	cuentaTotal = prompt("Ingrese la cantidad a pagar en total: ");
	cuentaTotal = parseInt(cuentaTotal);

	masPropina = (cuentaTotal * 10 / 100) + cuentaTotal;

	aPagarCadaAmigo = masPropina / amigos;

	alert("En un grupo de " + amigos + " amigos, siendo un total de " + cuentaTotal + " mas la propina del 10% quedaria " + masPropina);








}
