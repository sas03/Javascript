function sayHi(){
	txtName = document.getElementById("txtName");
	divOutput = document.getElementById("divOutput");

	name = txtName.value;

	divOutput.innerHTML = "<em>" + name + "<\/em>";
	divOutput.innerHTML += " jolie";
}

function test(){
	test = document.getElementById("test");
	example = document.getElementById("example");

	nom = test.value;
	example.innerHTML = nom;
	example.innerHTML += "jolie";
}