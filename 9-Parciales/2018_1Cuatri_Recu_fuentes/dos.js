function mostrar()
{
	//alert("tu compra es de $xxxx tenes un 
	//	descuento del 10% queda en $xxxx, mas el iva es $xxx");

	//despues de 15 minutos solo se mostrará el enunciado del ejercicio 3

	var pago;
	var descuento;
	var masIva;

	pago = elNombre.value;

	pago = parseInt(pago);

	descuento = pago - (pago*10/100);

	masIva = descuento * 21 / 100;

	masIva = masIva + descuento;

	alert("Tu compra es de $" + pago + " tenes un descuento del 10% queda en $" + descuento + ", mas el iva es $" + masIva);


}
