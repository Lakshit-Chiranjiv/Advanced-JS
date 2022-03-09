// Iterable implementation
const arr = ["India","is","my","country"];
const obj = {
    [Symbol.iterator]: function(){
        let step = 0;
        const iterator = {
            next: function(){
                step++;
                if(step === 1)
                    return{
                        value: "Hello",
                        done: false
                    }
                else if(step === 2)
                    return{
                        value: "World",
                        done: false
                    }
                return {
                    value: undefined,
                    done: true
                }
            }
        }

        return iterator;
    }
}

const obj2 = {
    [Symbol.iterator]: function(){
        let step = 0;
        const iterator = {
            next: function(){
                step++;
                if(step <= arr.length)
                    return{
                        value: arr[step-1],
                        done: false
                    }
                return {
                    value: undefined,
                    done: true
                }
            }
        }

        return iterator;
    }
}

for(const word of obj){
    console.log(word);
}

for(const word of obj2){
    console.log(word);
}

//This is how iterables are internally implemented in JS for various data structures