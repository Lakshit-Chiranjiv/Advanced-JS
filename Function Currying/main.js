//simple function
function find_sum(a,b,c){
    return a+b+c;
}

console.log("result from find_sum function : "+find_sum(4,7,5));

//currying is a process in which a simple function with multiple params is transformed into such a function where params are individually passed...this is done using nested functions

// func(a,b,c) --> curried_func(a)(b)(c)

function currying_a_function(func){
    return function(a){
        return function(b){
            return function(c){
                return func(a,b,c);
            }
        }
    }
}

const curried_sum_func = currying_a_function(find_sum);

//1st way of calling a curried function
console.log("result from curried_sum_func : "+curried_sum_func(5)(8)(6));


//2nd way of calling a curried function
const added_first_param = curried_sum_func(4);
const added_second_param = added_first_param(7);
const added_third_param = added_second_param(10);

console.log("result from curried_sum_func using 2nd calling way : "+added_third_param);