//3 agregar textos de valor 
//serie de datos JSON 
var px = 140;
var py = 40;

var datos = [ 
	{"posX" : px, "posY" : 0+py, "largoArticulo" : 80-2, "capNombre" : "C1", "artNombre" : "Art. 1"}, 
	{"posX" : px, "posY" : 80+py, "largoArticulo" : 20-2, "capNombre" : "C1", "artNombre" : "Art. 2"}, 
	{"posX" : px, "posY" : 100+py, "largoArticulo" : 60-2, "capNombre" : "C1", "artNombre" : "Art. 3"}, 
	{"posX" : px, "posY" : 160+py, "largoArticulo" : 40-2, "capNombre" : "C1", "artNombre" : "Art. 4"}, 
	{"posX" : px, "posY" : 200+py, "largoArticulo" : 100-2, "capNombre" : "C1", "artNombre" : "Art. 5"}, 
	{"posX" : px, "posY" : 300+py, "largoArticulo" : 50-2, "capNombre" : "C1", "artNombre" : "Art. 6"} 
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

var wBox 	= 90;
var xpos 	= function(d) { return d.posX; };
var ypos 	= function(d) { return d.posY + 40; };
var artH	= function(d) { return d.largoArticulo; };
var artTit = function(d) {	return d.artNombre; };
var capTit = function(d) {	return d.capNombre; };
var aCol	=  ["yellow", "orange", "red" ];



//crea una especie de grupo donde de elementos basados en los datos
var articulos = chart.append("g") 
			.classed("articulos", true)
			//vincula circulos a srie de datos 
			.selectAll("rect")		
			.data(datos)
			//ARTICULO CAJITA
			.enter() 				
				.append("rect")
				.attr("x", xpos)
				.attr("y", ypos)
				.attr("width", wBox )
				.attr("height", artH)
				.style("opacity", .9)
				.style("fill", "blue")
				;				
			//ARTICULO TEXTO TITULOS
 			chart.selectAll("text")
			   .data(datos)
			   .enter()
			   .append("text")
			   .attr("x", xpos)
			   .attr("y", ypos)
			   .attr("transform", "translate(5, 12)")
			   .text( artTit )
			   .style("font-family", "sans-serif")
			   .style("font-size", "10px")
			   .style("fill", "white")
			   ;
			//ARTICULO CAJITA RELACIONADOS
 			chart.selectAll("circle")
			.data(datos)
				.enter() 				
				.append("circle")
				.attr("cx", xpos)
				.attr("cy", ypos)
				.attr("transform", "translate(82, 7)")
				.attr("r", 4)
				.style("fill", "orange")
				;

			//CAPITULO CAJITA
 			chart.selectAll("cajitaCap")
			.data(datos)
				.enter() 				
				.append("rect")
				.attr("x", xpos)
				.attr("y", py)
				.attr("width", wBox )
				.attr("height", 38)
				.attr("transform", "translate(0, 00)")
				.style("fill", "red")
				;
	
	 		// //CAPITULO TEXTO TITULOS
 			chart.selectAll("textCap")
			   .data(datos)
			   .enter()
			   .append("text")
			   .attr("x", xpos)
			   .attr("y", py)
				.attr("transform", "translate(5, 12)")
			   .text( capTit )
			   .style("font-family", "sans-serif")
			   .style("font-size", "10px")
			   .style("fill", "white")
			   ;





