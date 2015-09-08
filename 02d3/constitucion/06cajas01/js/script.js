//3 agregar textos de valor 
//serie de datos JSON 
var px = 100;
var py = 100;

var datos = [ 
	{"posX" : 100, "posY" : 10, "largoArticulo" : 38, "capNombre" : "C1", "artNombre" : "Art. 1"}, 
	{"posX" : 100, "posY" : 50, "largoArticulo" : 58, "capNombre" : "C1", "artNombre" : "Art. 2"}, 
	{"posX" : 100, "posY" : 110, "largoArticulo" : 28, "capNombre" : "C1", "artNombre" : "Art. 3"}, 
	{"posX" : 100, "posY" : 140, "largoArticulo" : 18, "capNombre" : "C1", "artNombre" : "Art. 4"}, 
	{"posX" : 100, "posY" : 160, "largoArticulo" : 78, "capNombre" : "C1", "artNombre" : "Art. 5"}, 
	{"posX" : 100, "posY" : 240, "largoArticulo" : 38, "capNombre" : "C21", "artNombre" : "Art. 6"} 
	];

 
 //nuevas rvaribles para area dbujo
var w = 1000, h = 500;

//crea un contenedor para el grafico, crea dentro un svg
var chart = d3.select('#caja')
			.append('svg')
			.attr('width', w)
			.attr('height', h)
			.style("background", "paleturquoise")
 			;

var xpos 	= function(d) { return d.posX; };
var ypos 	= function(d) { return d.posY; };
var wBox 	= 90;
var xposText 	= function(d) { return d.posX+5; };
var yposText 	= function(d) { return d.posY+12; };
var artH	= function(d) { return d.largoArticulo; };

var artText = function(d) {	return d.capNombre + " | " + d.artNombre; };
var aCol	=  ["yellow", "orange", "red" ];



//crea una especie de grupo donde de elementos basados en los datos
var articulos = chart.append("g") 
			.classed("articulos", true)
			//vincula circulos a srie de datos 
			.selectAll("rect")		
			.data(datos)
			 
			//una vez vinculados y creados, ahora se procede a "mostrarlos"
			.enter() 				
				.append("rect")
			//asigna valores de los datos para la posicion x				
				.attr("x", xpos)
				.attr("y", ypos)
				.attr("width", wBox )
				.attr("height", artH)
				.style("opacity", .9)
				.style("fill", "blue")

//3 se agregan los textos de valores
 			chart.selectAll("text")
			   .data(datos)
			   .enter()
			   .append("text")
			   .attr("x", xposText)
			   .attr("y", yposText)
			   .text( artText )
			   .style("font-family", "sans-serif")
			   .style("font-size", "10px")
			   .style("fill", "white")
			   ;





