
Array.prototype.myForEach = function(cb){
    for(let i=0;i<this.length; i++){
        cb(this[i], i, this);
    }
}

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0;i<this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}


Array.prototype.myReduce = function(cb,init){
    let accumulator = init;
    for(let i=0; i<this.length; i++){
        accumulator = (accumulator || accumulator ===0) ? cb(accumulator, this[i], i) : this[i];
    }
    return accumulator;
}

let tempArray = [2,3,4].myMap((el,index)=> el+index);
console.log("map reuslt",tempArray);

[2,3,4].myForEach((el,index)=>{
    console.log("el: ", el, index);
});

let reduceValue = [2,3,4].myReduce((acc,el) => acc*el, 0);
console.log("reduce val: ", reduceValue);
