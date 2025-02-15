
Function.prototype.mycall = function (context={}, ){
    context.fn = this;
    return context;
}

Function.prototype.myApply = function (context={}){
    context.fn = this;
    return context;
}

function myfunc(printname){
    // console.log("obj: ",this,"My name is", this.name,"and", "I am a", this.profession);
    console.log("args: ", printname);
}

let tempObj = {
    name:"Alex",
    age: 21,
    profession:"Software Engineer"
}


myfunc.call(tempObj, "John");
