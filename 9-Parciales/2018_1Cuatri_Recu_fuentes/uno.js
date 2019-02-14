
function mostrar()
{
	  alert("Tenes dos mascotas xxxx y xxxxx, que pesan xx y xx kilos, la suma de los kilos es xx");


	  var mascotaUno;
	  var mascotaDos;
	  var suma;

	  mascotaUno = prompt("Ingresa cuanto pesa la primera mascota: ");
	  mascotaDos = prompt("Ingresa cuanto pesa la segunda mascota: ");

	  mascotaUno = parseInt(mascotaUno);
	  mascotaDos = parseInt(mascotaDos);

	  suma = mascotaUno + mascotaDos;

	  alert("Las dos mascotas en total suman: " + suma);
}
