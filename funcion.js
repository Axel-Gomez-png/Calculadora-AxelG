let p1=document.getElementById('op');
let p2=document.getElementById('re');
let calculadora=document.getElementById('calculadora');

function agregar(n){
	p1.innerHTML+=n;

	if (p1.innerHTML.length>=3) {
		calcular();

	}
}
function calcular(){
	p2.innerHTML=eval(p1.innerHTML);
}
function resultado(){
	p1.innerHTML=p2.innerHTML;
	p2.innerHTML="";
}
function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}
function porcentaje(){
	p2.innerHTML=(p1.innerHTML)*(.01);
}