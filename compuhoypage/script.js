console.log("Script loaded!")
var form1 = document.getElementById("form1")
//var content = document.getElementById("form-content")
var nameUser = document.getElementById("nameUser")
var lastName = document.getElementById("lastname")
var email = document.getElementById("email")
var date= document.getElementById("born")
var pasword = document.getElementById("pass")

/*form1.addEventListener("submit", function(event){
   
    event.preventDefault();
  
    
    console.log(event);
    console.log("submit");
    console.log(nameUser.value) 
   
    const data = Object.fromEntries(new FormData(event.target).entries());
    console.log(data)
    writeDocument(data)
  
});*/
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
/* form1.addEventListener("submit", function(event){
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
});*/

function writeDocument(data){
    const div = document.getElementById('container')
    var text = '<div p-3>' + '<h3>' + data.name + '</h3>' +
                             '<h3>' + data.lastName + '</h3>' +
                             '<h3>' + data.born + '</h3>' +
                             '<h3>' + data.pass + '</h3>' 
    div.innerHTML += text                             
}
const list = []

form1.addEventListener('submit', function(event){
    event.preventDefault();
    list.push(form1.elements['nameUser'].value)
    form1.elements['nameUser'].value = ""

    list.push(form1.elements['lastname'].value)
    form1.elements['lastname'].value = ""

    list.push(form1.elements['pass'].value)
    form1.elements['pass'].value = ""

    
    list.push(form1.elements['born'].value)
    form1.elements['born'].value = ""

    localStorage.setItem('users', list)
    console.log(list)
})

function example (){
	return[] 
    const stack = new Stack();
} 
function change(n,r){
	if (r== 'si') {
		document.getElementById(n).style.background="#549EE3"
	} 
	else {
		document.getElementById(n).style.background=""
	}
}