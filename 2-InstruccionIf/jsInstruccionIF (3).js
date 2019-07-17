function mostrar()
{
//tomo la edad  
    var edad;
    var mensaje;

    edad = document.getElementById("edad").value;

    if(edad > 17)
    {
        mensaje = "Es mayor de edad";
    }
    else
    {
        mensaje = "Es menor de edad";
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN