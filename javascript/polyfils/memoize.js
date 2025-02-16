
function memoize(fn){
    let memoResult = {};
    return function (...args){
        let strArgs = JSON.stringify(args);
        memoResult[strArgs] = memoResult[strArgs] ?? fn.apply(this,args);
        return memoResult[strArgs];
    }
}

let tempObj = {
    name:"Alex",
    age: 21
}

function expensizeProduct(a,b){
    for(let i=0;i<100000000;i++){}
    return {sq: a*b, name: this.name, age: this.age};
}

let memoizedFunc = memoize(expensizeProduct);

console.time("First call");
// expensizeProduct(2,3);
console.log(memoizedFunc.call(tempObj,2,3))
console.timeEnd("First call");

console.time("second call");
console.log(memoizedFunc.call(tempObj,2,3))
console.timeEnd("second call");
