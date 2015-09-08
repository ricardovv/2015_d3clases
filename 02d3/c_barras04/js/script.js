//Ejemplo deRay Villalobos


//var bardata = [30, 40, 15, 90, 35, 60, 10, 70, 15, 50, 20, 65, 15, 60, 90, 35,];

var bardata = [];


// I N I C I O - - - - - - - - - - - - - - - - - 
d3.tsv('datos/datos.tsv', function(data) {

for(key in data) {
		bardata.push(data[key].valores)
	}

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
				.domain([0, d3.max(bardata)])
				.range([0, 300])

	//funciones para colocar todas las bara dentro de un rango
	var xScale = d3.scale.ordinal()
				.domain(d3.range(0, bardata.length ))// rango de 0 al total de datos 
				.rangeBands([0, w])// de posicin 0 al ancho del gr'a'fico

	//cartelitos con datos
	var tooltip = d3.select('body').append('div')
				.style('position', 'absolute')
				.style('background', 'white')
				.style('padding', '7px')
				.style('opacity', 0)


	var	barColor;


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


	//Muestra información en contexto 
	.on('mouseover', function(d) {
		tooltip.transition()
			.style('opacity', .9)

		tooltip.html(d)
			.style('left',	(d3.event.pageX) + 'px')
			.style('top',	(d3.event.pageY) + 'px')
			
		barColor = this.style.fill;
		d3.select(this)
			.style('opacity', .5)
			.style('fill', 'white')
	})

	 .on('mouseout', function(d) {
	 	d3.select(this)
	 		.style('opacity', 1)
	 		.style('fill', barColor)
	})



	//Coloca ext para un titulo usando variables
	d3.select('svg').append("text")
		.attr('x', 10)  
		.attr('y', 15)
		.style('fill', 'brown')
		.style('font-size', "20px")
		.text("Este es el Titulo en el svg")

	//Coloca ext para un titulo c variables
	var	txt = "Un texto cualquiera dentro del svg";
	var posy = 28;

	//d3.select('body')
	d3.select('svg')
	.append("text")
		.attr('x', 10)
		.attr('y', posy)
		.style('fill', 'blue')
		.style('font-size', '10px')
		.text(txt)



// F I N A L  - - - - - - - - - - - - - - - - - 
})	


