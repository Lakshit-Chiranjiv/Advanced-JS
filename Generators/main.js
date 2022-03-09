//here we are again creating an iterable using generator function which is easier than the previous method
//generator function can pause and can continue from where it paused
function* gen_func(){//generator function is created using function*
    yield "Hello";//yield pauses the generator function and prints whatever message is next to it.
    yield "World";
}

const gen_obj = gen_func();//calling generator function returns a generator object which is an iterable
//now this iterable can be used in a for...of loop
for(const wrd of gen_obj){
    console.log(wrd);
}

const arr = ["This","is","an","example","array"];

function* gen_func2(){
    for(let i=0;i<arr.length;i++)
        yield arr[i];
}

const gen_obj2 = gen_func2();

for(const wrd of gen_obj2){
    console.log(wrd);
}