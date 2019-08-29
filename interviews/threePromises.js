// Having three functions that return promises, pass the result of function one to the function two, and the result of the function two to the function three.

function func1(){
	return Promise.resolve(1);
}
function func2(number){
	return Promise.resolve(number+2);
}
function func3(number){
	return Promise.resolve(number+3);
}

func1()
.then(res=>{
    return func2(res);
})
.then(res=>{
    return func3(res);
})
.then(res=>{
    console.log(res);
});