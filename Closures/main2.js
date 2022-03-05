
function outer_func(){
    let val = 20;

    function inner_func(){
        val += 5;
        console.log(val);
    }
    return inner_func;
}

const func_ref = outer_func(); //returns inner_func

func_ref();
func_ref();
func_ref();

//here comes the concept of closures
//when a function returns a function, it results in a closure
//and on returning a function, not only the function is returned,also the scope of the function is returned which is persisted in the variable to which the function is returned i.e. func_ref
//this means the inner_func is returned together with the val variable so it keeps track of the value even after multiple function calls