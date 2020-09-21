//factory --> fabrika za objekte
/*
function makePet(name) {
    const pet = {};
    // pet.name = "Gandalf";
    pet.name = name;
    pet.type= "cat";

    return pet;
}

let cat = makePet("Marla");
console.log(cat);

let cat2 = makePet();
console.log(cat2 instanceof makePet); // daje false pa se zato koristi constructor
*/


// constructor

/*
function MakePet() { // kalse pocinju velikim slovom
    // const this = {} .... zamislimo da postoji
    this.name = "Gandalf";
    this.type = "cat";
    // return this ... zamislimo da postoji
}

let cat = new MakePet(); // new u svari sluzi da ne moramo da pisemo ovo sto je zamisljeno gore

console.log(cat instanceof MakePet); // TRUE
*/

// class

/*
class MakePet {
    constructor () {
        this.name = "Gandalf";
        this.type = "cat";
    }
}

let cat = new MakePet();
console.log(cat);
*/

class MakePet {
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }

    makeSound(){
        console.log('Grrrr.....');
    }
}

class Cat extends MakePet {
    constructor(name, type, color){
        super(name, type); // super znaci pozovi constructor parent klase
        this.color = color;
    }
    makeSound(){ // overrajduje metodu iz parenta
        console.log('Mjaooo....');
    }
}

class Dog extends MakePet {

}

let cat = new Cat("Gandalf", "cat", "black");
let dog = new Dog("Max", "dog");
console.log(cat);
console.log(dog);

dog.makeSound()
cat.makeSound();