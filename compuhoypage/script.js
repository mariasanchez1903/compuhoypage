console.log("Script loaded!");
var form1 = document.getElementById("form-1");

 /*var getData = function (){
 	var name = document.getElementById("name").value;
 	var lastName = document.getElementById("lastName").value;
 	var email = document.getElementById("email").value;
 	console.log(name+"  "+lastName +"  "+email);
 }*/

/*form1.addEventListener("submit",function(event){
 	var name = form1.elements["name"].value
 	event.preventDefault();
 	const data = Object.fromEntries(new FormData(event.target).entries());
 	console.log(event);
 	console.log("submit");
 	console.log(data)
 });*/

form1.addEventListener("submit", function(event){
	var name = form1.elements["name"].value
	var content = document.getElementById("content");
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	var content = document.getElementById("content");
	content.innerHTML = "<h2> Nombre: </h2>";
	content.innerHTML += "<p>" + data.name + "</p>";
	content.innerHTML += "<h2> Apellidos: </h2>";
	content.innerHTML += "<p>" + data.lastName + "</p>";
	var array = example();
});

function example (){
	return[] 
} 
function change(n,r){
	if (r== 'si') {
		document.getElementById(n).style.background="#549EE3"
	} 
	else {
		document.getElementById(n).style.background=""
	}
}