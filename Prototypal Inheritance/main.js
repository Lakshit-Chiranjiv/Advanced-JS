function Person(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.introduce = function(){
    console.log(`Hey, my name is ${this.firstName} ${this.lastName}.Nice to meet you!!`);
}

function Student(fname,lname,school,marks){
    Person.call(this,fname,lname);
    this.school = school;
    this.marks = marks;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.studying = function(){
    console.log(`${this.firstName} is studying`);
}//this should be below object.create line as it might be overridden

const s1 = new Student("Naruto","Uzumaki","Ninja School",40);

console.log(s1);
s1.studying();
s1.introduce();