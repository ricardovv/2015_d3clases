
//serie de datos
var datos = [0, 60, 44, 15, 22, 51, 33, 48, 10];


//crea un contenedor para el grafico, crea dentro un svg
var w = 600;
var chart = d3.select('#caja')
			.append('svg')
			.attr('width', w)
			.attr('height', 200)
			.style("background", "yellow")
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
				.attr("cy", 100	)
			//asigna valores de los datos para la posicion x				
				.attr("cx", function(d) {
					return d * 6;
				})

			.attr("r", 10)

			.style("fill", "blue")
			.style("opacity", .6)

  				




