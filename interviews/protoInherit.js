function Character(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} is running!`);
    }
}

Sorcerer.prototype = Object.create(Character.prototype);
Sorcerer.prototype.constuctor = Sorcerer;

function Sorcerer(name, element){
    Character.call(this, name);
    this.element = element;
    this.attack = function(){
        console.log(`${this.name} is attacking with ${this.element}`);
    }
}

const p1 = new Sorcerer('Arcayus', 'Fire');
p1.attack();
p1.run();

console.log(p1.__proto__);
console.log(p1.__proto__.__proto__);
console.log(p1.__proto__.__proto__.__proto__);

