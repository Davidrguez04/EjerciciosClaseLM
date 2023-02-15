/**
 * 
 */
var dni=28544378;

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 
'K', 'E', 'T'];

function examen(){
	var operacion=dni/23;
	var letra=letras[operacion];
	if(dni<=0||dni>99999999)
		document.alert("Este número no es válido");
		
	else{
	
	console.log(dni);
	console.log(letra);
	let dni1=dni+letra;
	document.write(dni);
	document.write(dni1);
	}
}