function mostrar()
{

var sexo;


for(sexo = 'a'; sexo != 'f' && sexo != 'm'; )
{
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN