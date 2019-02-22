function mostrar()
{
	alert('iteración while');
	/*
	el comportamiento interno del while, interacciones??.. como manipularla! 
	entender la forma de como funciona esto... 
	se escribe con parentesis y llaves y la palabra while

	el 1 significa que entrara y ejecutara. pero cuando sale de la llave vuelve al parentesis
	coon if o else fncionan con direcciones, swtch tiene varias cajas, el while hace que 
	vuelva a entrar a la caja, y sale cuando lo del parentesis vale CERO, sino vuelve siempre
	lo qeu se escriba lo qeu esta entre llaves se ejecutara tantas veces como la cantidad que diga 
	entre parentesis,
	se reemplaza el 1 por una variable. 


	el punto 1 la variable tiene que tener un valor
	var contador;

	contador = 0;

	pq? pq si empiezo en cero es mas controlable algoritmicamente..)?

	while ejecutara el codigo la cantidad de veces siempre y cuando lo del parentesi sea cierto

	wjile(contador < 10)

	entonces se ejecutara esa cantidad! 


	el punto 2 es establecer la condicion.. 
	y tiene que ser true para que se ejecute!

	y el punto 3 es el SALIR DEL BUCLE

	Y  consiste en modificar lo que esta () 

	asi qeu hay que contar!!
	se va inclementando de a uno!!

	el contador suma un literal.. no siempre de a uno, sino que es contador asignada a si misma
	MAS UN VALOR LITERAL!! 
	1,2,3,4,5,6 etc...

	CUANDO NO CUMPLE CON LA CONFICION SALE!!
	OSEA CUANDO VALGA 10 SALDRA!!

	el contador cuando salga valdra el valor que yo le asigne!! 

	es logica!! sin estos 3 pasos, no entro o no salgo nunca del while!! XD
	*/
	var contador;

	contador = 0;

	while(contador < 10)
	{
		/*
		console.log(contador);
		contador = contador + 1;
		*/
		//de la forma de arriba muestra de 0 a 9 por el orden.. abajo mostrara de 1 a 10! 

		contador = contador + 1;
		console.log(contador); 

	}

}//FIN DE LA FUNCIÓN