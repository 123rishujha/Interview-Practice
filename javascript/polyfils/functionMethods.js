
Function.prototype.myCall = function (context={},...args ){
    if(typeof this != "function"){
        throw new Error(this, "is not callable");
    }
    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function (context={}, args=[]){
    if(typeof this != "function"){
        throw new Error(this, "is not callable");
    }
    context.fn = this;
    context.fn(...args);
}

Function.prototype.myBind = function (context={}, ...args){
    context.fn = this;
    return function(...rest){
        context.fn(...args, ...rest);
    }
}

function myfunc(greating, punctuation){
    console.log(greating, "I am", `${this.name}${punctuation}`);
}

let tempObj = {
    name:"Alex",
    age: 21,
    profession:"Software Engineer"
}


myfunc.myCall(tempObj, "Hello", ".");
myfunc.myApply(tempObj, ["hi", "!"]);
let temp = myfunc.myBind(tempObj, "hi");
temp("!");
