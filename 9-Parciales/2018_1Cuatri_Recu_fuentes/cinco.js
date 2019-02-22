function mostrar()
{
	/*
	solo switch
	cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, 
	si es con tarjeta visa un 10%, si es por paypal un 15%. por mercadoPago un 10%, 
	efectivo 20%, cualquier otro metodo solo un 5%
	si compraste el paquete "todo incluido", y pagas con paypal se te suma un 10% al descuento.
	si pagas en efectivo, tenes vaeias opciones, el paquete "solo desayunos" te suma un 
	10%  al descuento, si el paquete es "todoincluido" te suma un 15% y para el resto de 
	los paquete no teien descuento adicional
	*/

	var precio;
	var metodos;
	var mensaje;
	var descuento;
	var porcentaje;
	var precioFinal;
	var todoincluido;
	var elija;
	var soloDesayunos;

	precio = prompt("Ingrese el precio por la habitacion: ");
	precio = parseInt(precio);

	metodos = prompt("Ponga su metodo de pago: ");

	switch(metodos)
	{
		case "mercadopago":
		case "visa":
			porcentaje = 10;
		break;

		case "paypal":

			elija = prompt("Si desea comprar el paquete todo incluido ponga: todo incluido, se le sumara otro 10% descuento a su compra.");
			switch(elija)
			{
				case "todo incluido":
					porcentaje = 25;
				break;

				default:
					porcentaje = 10;

			}
		break;

		case "efectivo":
			porcentaje = 20;
			elija = prompt("Si queres el paquete solo desayunos y tener 10% descuento mas ingresa el numero "1", si quereis el paquete todo incluido y tener un 15% descuento ingresa el numero 2.");

			switch(elija)
			{
				case 1:
					porcentaje = 30;
				break;

				case 2:
					porcentaje = 35;



			}
		break;


		default:
			porcentaje = 5;
	}

	descuento = precio * porcentaje / 100;
	precioFinal = precio - descuento;

	mensaje = "La habitacion cuesta " + precio + " y con el descuento usted pagara ";

	alert(mensaje + precioFinal);
}
