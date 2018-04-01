function sayHi(){
	var txtName = document.getElementById("txtName");
	var txtOutput = document.getElementById("txtOutput");

	//var number = parseFloat(txtName.value);
	//txtOutput.value = number;
	var name = txtName.value;	
	txtOutput.value = "Salut, " + name + " !";

}

//innerHTML décrit le code HTML à l'intérieur de l'élément
//Variables de type text(string) possèdent une propriété manipulable(value)