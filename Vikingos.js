//Compradoras

var Compradoras = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
};

var random = function (min, max){
	return Math.round(Math.random() * (max - min) + min);
};
function randomName(){
	var names = ['Fernando','Fernandito','Fernandinho','Reyes de Oriente','Gregorio','Aurorita','Aurora','Almu','Eli','Pilarita',
			'Almudena','Reyes','Elisabet','Pilar','Javi','Cesar','Santi','Javier','Julio Cesar', 'Santiago', 'Gabriel',
			'Alvarito', 'Juan Carlos','Gabri','Alvaro','Juanca','Guille','Andres','Aaron','Miguel','Cris', 'Guillermo',
			'Andresito','Mesurado', 'Vicaria', 'Cristian'];
 return names[random(0, names.length)];
}



//var compradora1 = new Compradoras(randomName(),totalHealth (20,100), strength(5, 15));


//Dinosaurios

var Dinosaurios = function (health, strength){
	this.name = "Dinosaurio";
	this.health = health;
	this.strength = strength;
};
 var dinosaurio1 = new Dinosaurios(random(5, 25), random(1,8));

//Entrenamiento

var compradora1 = new Compradoras(randomName(),random(20,100), random(5, 15));
var compradora2 = new Compradoras(randomName(),random(20,100), random(5, 15));

function training (compradora1, compradora2) {
	while (compradora1.health >=15 && compradora2.health >= 15){
		compradora2.health = compradora2.health - compradora1.strength;
		compradora1.health = compradora1.health - compradora2.strength;
			
  console.log(compradora2.health, compradora1.health);
	} 	
	if (compradora1.health > compradora2.health){
	  console.log (compradora1.name + ' ha resultado victoriosa, gana los zapatos!!');
	} else { console.log (compradora2.name + ' ha resultado victoriosa, gana los zapatos!!');
	  
	}
}
training(compradora1,compradora2);

//Batalla contra Dinosaurios
 
 var turns = Math.floor(Math.random()* (9 - 5) + 5);


 for (var i = 0; i < turns; i++) {


 }