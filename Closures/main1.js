
function outer_func(){
    let val = 20;

    function inner_func(){
        val += 5;
        console.log(val);
    }
    inner_func();
}

outer_func();
outer_func();
outer_func();

//every time outer_func is called, a new instance of val is made which is incremented in inner_func and printed
//nested functions have access to variables declared in outer scope as well