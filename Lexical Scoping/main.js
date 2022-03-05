const val1 = 70;

function outer_func(){
    const val2 = 50;

    function inner_func(){
        const val3 = 30;

        console.log(val1,val2,val3);
    }
    
    inner_func();
}

outer_func();

//function nesting is allowed in javascript

//the variable to be used is checked in self scope,if not found then JS keeps checking one level up till the global scope