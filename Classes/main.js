//classes are similar to other languages like java and c++
//classes are just syntactic sugar to the function prototypes 

class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    
    introduce(){
        console.log(`Hey, my name is ${this.firstName} ${this.lastName}.Nice to meet you!!`);
    }
}

const p1 = new Person("Kakashi","Hatake");
p1.introduce();

class Student extends Person{
    constructor(fname,lname,school,marks){
        super(fname,lname);
        this.school = school;
        this.marks = marks;
    }

    studying(){
        console.log(`${this.firstName} is studying`);
    }

    details(){
        console.log(`${this.firstName} studies in ${this.school} and scored ${this.marks} marks`);
    }
}

const s1 = new Student("Naruto","Uzumaki","Ninja School",57);
s1.introduce();
s1.studying();
s1.details();