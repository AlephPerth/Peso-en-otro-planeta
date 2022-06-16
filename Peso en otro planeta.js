alert("El espacio: la última frontera");

var usuario = prompt("¿Cuantos kilos pesas?"); // esta funcion es un alert pero con un cuadro de texto
var planeta = prompt("¿En que planeta estas? \n0 Todos, 1 Marte, 2 Jupiter, 3 Saturno");

var peso = parseInt(usuario); // esta funcion convierte el string en un numero entero

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var peso_final;

if (planeta == 1) // a IF no es una funcion por lo que no se le pasa un parametro sino una comparacion

{    

peso_final = peso * g_marte / g_tierra; // defino la variable peso_final
peso_final = parseInt(peso_final); // esta funcion convierte el decimal en entero
document.write( "<h3>"+"Tu peso en Marte es: " + peso_final + " kg"+"</h3>"); // esta funcion imprime el resultado

} //Los bloques de codigo no se cierran con ;

else if (planeta == 2) // tambien es posible hacerlo con un ELSE sin la necesidad de poner la comparacion

{

peso_final = peso * g_jupiter / g_tierra;
peso_final = parseInt(peso_final);
document.write( "<h3>"+"Tu peso en Jupiter es: " + peso_final + " kg"+"</h3>");

}

else if (planeta == 3)

{

peso_final = peso * g_saturno / g_tierra;
peso_final = parseInt(peso_final);
document.write( "<h3>"+"Tu peso en Jupiter es: " + peso_final + " kg"+"</h3>");

}

else if (planeta == 0)

{

document.write("<h3>"+"Tu peso en la Tierra es: " + peso + " kg"+"</h3>")
    
peso_final = peso * g_marte / g_tierra; // defino la variable peso_final
peso_final = parseInt(peso_final); // esta funcion convierte el decimal en entero
document.write( "<h3>"+"Tu peso en Marte es: " + peso_final + " kg"+"</h3>"); // esta funcion imprime el resultado

peso_final = peso * g_jupiter / g_tierra;
peso_final = parseInt(peso_final);
document.write( "<h3>"+"Tu peso en Jupiter es: " + peso_final + " kg"+"</h3>");

peso_final = peso * g_saturno / g_tierra;
peso_final = parseInt(peso_final);
document.write( "<h3>"+"Tu peso en Saturno es: " + peso_final + " kg"+"</h3>");

}

else if (planeta !== 0, 1, 2, 3)

{

document.write( "<h3>"+"No te pases de listo conmigo, amiguito e_e "+"</h3>");

}