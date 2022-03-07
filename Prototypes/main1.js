function Person(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}

const p1 = new Person("Kakashi Hatake");
const p2 = new Person("Itachi Uchiha");
const p3 = new Person("Might Guy");

p1.introduce = function(){
    console.log(`Hey, my name is ${this.firstName} ${this.lastName}.Nice to meet you!!`)
}

p1.introduce();//here it is okk
//p2.introduce();//but this gives error as introduce function is not a property of p2 object or any other object ither than p1
//what if we want to apply a property generally to all the objects

// Person.introduceName = function(){
//     console.log(`Hey, my name is ${this.firstName} ${this.lastName}.Nice to meet you!!`)
// } we can't directly add some property to a function
//every function has a prototype object which can be used to add some properties to it generalized to all the objects as well