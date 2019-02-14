
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

	  pesoUno = prompt("Ingresa cuanto pesa la primera mascota: ");
	  pesoDos = prompt("Ingresa cuanto pesa la segunda mascota: ");

	  pesoUno = parseInt(pesoUno);
	  pesoDos = parseInt(pesoDos);

	  suma = pesoUno + pesoDos;

//alert("Tenes dos mascotas xxxx y xxxxx, que pesan xx y xx kilos, la suma de los kilos es xx");

//en que se diferencian??

	  alert("Tenes dos mascotas " + nombreUno + " y " + nombreDos + ", que pesan " + pesoUno + " y " + pesoDos + " kilos, la suma de los kilos es " + suma );

}
