
//serie de datos JSON 
var datos = [
	{"posX" : 5, "posY" : 10, "diam" : 20, "categ" : "red"}, 
	{"posX" : 10, "posY" : 30, "diam" : 14, "categ" : "blue"}, 
	{"posX" : 15, "posY" : 25, "diam" : 10, "categ" : "red"}, 
	{"posX" : 20, "posY" : 45, "diam" : 32, "categ" : "blue"}, 
	{"posX" : 25, "posY" : 30, "diam" : 9, "categ" : "blue"}, 
	{"posX" : 30, "posY" : 15, "diam" : 28, "categ" : "red"} 
	];

 

//crea un contenedor para el grafico, crea dentro un svg
var chart = d3.select('#caja')
			.append('svg')
			.attr('width', 600)
			.attr('height', 400)
			.style("background", "pink")
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

  				




