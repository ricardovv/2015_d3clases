//3 agregar textos de valor 
//serie de datos JSON 
var datos = [
	{"posX" : 5, "posY" : 10, "diam" : 20, "categ" : "red", "nombre" : "juan"}, 
	{"posX" : 10, "posY" : 30, "diam" : 14, "categ" : "blue", "nombre" : "alicia"}, 
	{"posX" : 15, "posY" : 25, "diam" : 10, "categ" : "red", "nombre" : "manuel"}, 
	{"posX" : 20, "posY" : 45, "diam" : 32, "categ" : "blue", "nombre" : "rosa"}, 
	{"posX" : 25, "posY" : 30, "diam" : 9, "categ" : "blue", "nombre" : "paula"}, 
	{"posX" : 30, "posY" : 15, "diam" : 28, "categ" : "red", "nombre" : "jose"} 
	];

 
 //nuevas rvaribles para area dbujo
var w = 800, h = 400;


//crea un contenedor para el grafico, crea dentro un svg
var chart = d3.select('#caja')
			.append('svg')
			.attr('width', w)
			.attr('height', h)
			.style("background", "paleturquoise")
 			;


//crea una especie de grupo donde de elementos basados en los datos
var circles = chart.append("g") 
			.classed("circles", true)
			//vincula circulos a srie de datos 
			.selectAll("circle")		
			.data(datos)
			 
			//una vez vinculados y creados, ahora se procede a "mostrarlos"
			.enter() 				
				.append("circle")
			//asigna valores de los datos para la posicion x				
				.attr("cx", function(d) {
					return d.posX * 15;
				})
				.attr("cy", function(d) {
					return d.posY * 5;
				})

				.attr("r", function(d){
					return d.diam;
				})

			.style("fill", function(d) {
					return d.categ;
			})
			.style("opacity", .6)

//3 se agregan los textos de valores
 			chart.selectAll("text")
			   .data(datos)
			   .enter()
			   .append("text")
			   .text(function(d) {
			    		return d.nombre;
			   })
			   .attr("x", function(d) {//posicion x para los textos
				   	return d.posX * 15;
			   })
			   .attr("y", function(d) {//posicion y para los textos
				   	return d.posY * 5;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "12px")
			   .attr("fill", "black");
  				


//3 para ver valor ancho y largo
d3.select('svg').append("text")
			   .text("W: " + w + " | H: " + h)
			   .attr("x", w-73)
			   .attr("y", 12)
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "10px")
			   .attr("fill", "black");




