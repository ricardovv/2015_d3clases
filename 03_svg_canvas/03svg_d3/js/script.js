// D3 usa el estandar SVG para hacer los dbujos enel navegador. 
//con la notacion de punto (.) se accede a ciertas propiedades de D3.
//se pueden controlar desde aquí propiedades CSS: atrr() 


//selecciona la caja y allí agrega un svg (.append)
d3.select('#caja')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', '#1155CC')
	//agrega un rectángulo	
	.append("rect")
		.attr('x', 100)
		.attr('y', 100)
		.attr('width', 200)
		.attr('height', 100)
		.style('fill', '#111144')
	
	//agrega un círculo, igual que arriba. ordenado de otra manera 	
	d3.select('svg')
		.append('circle').attr('cx', 300).attr('cy', 150).attr('r', 50).style('fill', 'red').style('fill-opacity', .5)
	

	//agrega un texto
	var posx = '200px'
	d3.select('svg')
		.append("text")
		.attr('x', posx)  
    	.attr('y', '50px')
    	.style('fill', 'orange')
		.style('font-size', "30")
		.text("Este es el texto");


