var bardata = [30, 40, 15, 90, 35, 40, 10, 65, 15, 60, 90, 35,];

var w = 600,
	h = 400,
	barW = 50,
	barSpacer = 1,
	color = 'yellow';

var colors = d3.scale.linear()
			//.domain([0, bardata.length])
			.domain([0, d3.max(bardata)])
			.range(['blue', 'red'])//'#aaaacc', '#ffffaa'

//funciones para la escala y rango maximo en y
var yScale = d3.scale.linear()
			.domain([0, d3.max(bardata)+10])
			.range([0, h])

//funciones para colocar todas las bara dentro de un rango
var xScale = d3.scale.ordinal()
			.domain(d3.range(0, bardata.length ))// rango de 0 al total de datos 
			.rangeBands([0, w])// de posicin 0 al ancho del gr'a'fico


//Selecciona un elemento y agrega un svg
d3.select('#caja').append('svg')
	.attr('width', w)
	.attr('height', h)
	.style('background', color)
 	.selectAll('rect').data(bardata)
 	.enter().append('rect')
 		.style('fill', colors)//'blue'
 		.attr('width', xScale.rangeBand())//aca es Bands, con s!!
 		.attr('height', function(d){
 			//return d; 		
 			return yScale(d);
 		})
 		//dibuja pas barras hacoa el lado segun la cantidad de elementos 
 		.attr('x', function(d,i){
 			return barSpacer + xScale(i);
		})
		//arras en negativo partiendo desde abajo
		.attr('y', function(d){
 			//return h - d;
 			return h - yScale(d);//mapea a lo alto de la caja
 		})
	 


//Coloca ext para un titulo usando variables
d3.select('svg').append("text")
	.attr('x', 10)  
	.attr('y', 25)
	.style('fill', 'brown')
	.style('font-size', "30px")
	.text("Este es el Titulo en el svg")

//Coloca ext para un titulo c variables
var	txt = "Un texto cualquiera dentro del svg";
var posy = h-10;

//d3.select('body')
d3.select('svg')
.append("text")
	.attr('x', 50)
	.attr('y', posy)
	.style('fill', 'green')
	.style('font-size', '20px')
	.text(txt)

