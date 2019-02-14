function mostrar()
{
	//alert("tu compra es de $xxxx tenes un 
	//	descuento del 10% queda en $xxxx, mas el iva es $xxx");

	//despues de 15 minutos solo se mostrará el enunciado del ejercicio 3

	var pago;
	var descuento;
	var iva;

	pago = prompt("Ingrese el valor de su compra.");

	descuento = pago - (pago*10/100);

	iva = descuento * 21 / 100;

	


}
