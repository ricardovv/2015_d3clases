//Ejemplo de Canvas, para vr las diferencias con SVG. 
//canvas es una etiqueta HTML para crear un "lienzo" donde dibujar pixeles. Como pintar un lienzo. 
//SVG enc ambio son elementos "vectoriales" que forman parte del DOM (Document Object Model)
// Por esto a veces es mejor trabajar con SVG, pues se pueden modificar por código, css o html.
//(Este ejemplo usa JQuery)


//Dibujo del canvas amarillo  
window.onload = function() {
    var canvas1 = document.getElementById("canvas1"),//elije id canvas1 del html donde colocar elementos
        context1 = canvas1.getContext("2d"),//le dice "dibujaras graficos 2d en la variable context1"
        width = canvas1.width = window.innerWidth/2,//ancho del canvas amarillo dividido en 2 
        height = canvas1.height = window.innerHeight/2;//alto del canvasa amarillo dividido en 2
        
        //Este ciclo crea las líneas
        for (var i=0; i <50; i++) {
            context1.beginPath();//dice comenzarás a dibujar un trazado
            context1.moveTo(0,height/2);// muevete al x, y
            context1.lineTo(width,9*i);// desde allí, dibuja líneas hasta los otros x e y
            context1.strokeStyle= "red";// pinta las líneas de color
            context1.stroke();//pone todo en la mesa...
        }



//Dibujo del canvas azul
    var canvas2 = document.getElementById("cajitaAzul"),//elije id cajitaAzul del html donde colocar elementos
        c2 = canvas2.getContext("2d"),//le dice "dibujaras graficos 2d en la variable context1"
        w       = canvas2.width = window.innerWidth,//ancho del canvas amarillo dividido en 2 
        h       = canvas2.height = window.innerHeight/2;//alto del canvasa amarillo dividido en 2
        
        //Este ciclo crea las líneas
        for (var i=0; i <50; i++) {
            c2.beginPath();//dice comenzarás a dibujar un trazado
            c2.moveTo(0,9*i);// muevete al x, y
            c2.lineTo(w,9*i);// desde allí, dibuja líneas hasta los otros x e y
            c2.strokeStyle= "brown";// pinta las líneas de color
            c2.stroke();//pone todo en la mesa...
        }


        for (var i = 0; i < 10; i++) {
            c2.beginPath();
            c2.arc(50+100*i, h/2, 50, 0, 2 * Math.PI, false);//crea el circulo con 2 arcos (2PI)
            c2.fillStyle = "green";
            c2.fill();
            c2.lineWidth = 10;
            c2.strokeStyle = 'orange';
            c2.stroke();
        }


};//end onLoad
