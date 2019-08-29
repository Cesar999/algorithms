class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age}`);
    }
}
class Employe extends Person{
    constructor(name, age, job){
        super(name,age);
        this.job = job;
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age} and I work on ${this.job}`);
    }
}
const person = new Person('Cesar',26);
person.getBio();
const employe = new Employe('Ricardo',1,'Programming');
employe.getBio();