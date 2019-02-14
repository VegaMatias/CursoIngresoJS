
function mostrar()
{
	//  alert("Tenes dos mascotas xxxx y xxxxx, que pesan xx y xx kilos, la suma de los kilos es xx");


	  var nombreUno;
	  var nombreDos;
	  var pesoUno;
	  var pesoDos;
	  var suma;

	  nombreUno = prompt("Ingresa el nombre de su primera mascota: ");
	  nombreDos = prompt("Ingresa el nombre de su segunda mascota: ");

	  mascotaUno = prompt("Ingresa cuanto pesa la primera mascota: ");
	  mascotaDos = prompt("Ingresa cuanto pesa la segunda mascota: ");

	  mascotaUno = parseInt(mascotaUno);
	  mascotaDos = parseInt(mascotaDos);

	  suma = mascotaUno + mascotaDos;

//alert("Tenes dos mascotas xxxx y xxxxx, que pesan xx y xx kilos, la suma de los kilos es xx");

//en que se diferencian??

	  alert("Tenes dos mascotas " + nombreUno + " y " + nombreDos + ", que pesan " + mascotaUno + " y " + mascotaDos + " kilos, la suma de los kilos es " + suma );

}
