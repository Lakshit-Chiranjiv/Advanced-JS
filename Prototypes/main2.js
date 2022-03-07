function Person(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}

const p1 = new Person("Kakashi Hatake");
const p2 = new Person("Itachi Uchiha");
const p3 = new Person("Might Guy");

Person.prototype.introduce = function(){
    console.log(`Hey, my name is ${this.firstName} ${this.lastName}.Nice to meet you!!`);
}

p1.introduce();
p2.introduce();
p3.introduce();


