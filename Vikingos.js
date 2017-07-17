//Compradoras

var Compradoras = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
};
var names = ['Fernando','Fernandito','Fernandinho','Reyes de Oriente','Gregorio','Aurorita','Aurora','Almu','Eli','Pilarita',
			'Almudena','Reyes','Elisabet','Pilar','Javi','Cesar','Santi','Javier','Julio Cesar', 'Santiago', 'Gabriel',
			'Alvarito', 'Juan Carlos','Gabri','Alvaro','Juanca','Guille','Andres','Aaron','Miguel','Cris', 'Guillermo',
			'Andresito','Mesurado', 'Vicaria', 'Cristian'];
var randomName = Math.floor(Math.random()*(names.length));
var selectName = names[randomName];

var totalHealth = function (min, max){
	return Math.round(Math.random() * (max - min) + min);
};
var strength = function (min, max){
	return Math.round(Math.random() * (max - min) + min);
};
var compradora1 = new Compradoras(selectName,totalHealth (20,100), strength(5, 15));


//Dinosaurios

var Dinosaurios = function (health, strength){
	this.name = "Dinosaurio";
	this.health = health;
	this.strength = strength;
};
 var dinosaurio1 = new Dinosaurios(totalHealth(5, 25), strength(1,8));

