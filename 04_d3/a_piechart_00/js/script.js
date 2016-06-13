var w = 400,
	h = 400,
	radius = 200,
	colores = d3.scale.ordinal()
			.range(['red','green','blue','yellow']);


var datos = [
	{
		nombre: "Juan",
		valor: 25, 
	},
	{
		nombre: "Juan",
		valor: 190, 
	},
	{
		nombre: "Juan",
		valor: 50, 
	},
	{
		nombre: "Juan",
		valor: 37, 
	},
	{
		nombre: "GATO",
		valor: 27, 
	},
	{
		nombre: "Perro",
		valor: 127, 
	}
]


var pie = d3.layout.pie()
	.value(function(d) {
		return d.valor
	})

var arc = d3.svg.arc()
	.outerRadius(radius)


var myChart = d3.select('#grafico').append('svg')
		.attr('width', w)
		.attr('height', h)
		.style('background', 'grey')
		.append('g')
		.attr('transform', 'translate(' +(w-radius)+','+(h-radius)+')')
		.selectAll('path').data(pie(datos))
		.enter().append('path')
		.attr('fill', function(d,i) {
			return colores(i);
		})
		.attr('d', arc)


d3.select('#grafico').append('svg')
	.attr('width', w)
	.attr('height', h)
	.style('background', 'blue')
 	.selectAll('rect').data(datos)
 
var posx = '20px', 
	titulo = "El titulo";

d3.select('svg')
	.append("text")
	.attr('x', posx)  
	.attr('y', '25px')
	.style('fill', 'orange')
	.style('font-size', "20")
	.text(titulo);

