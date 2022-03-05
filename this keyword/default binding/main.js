const name = "Lakshit";//this won't be taken as globalspace object variable as this is not a browser
greetName();

globalThis.name = "Kakashi";
greetName();
function greetName(){
    console.log(`Hello ${this.name}, nice to meet you`);
}
//by default ,undefined is assigned to this keyword
//but if there is a name variable at global scope then this keyword points to that