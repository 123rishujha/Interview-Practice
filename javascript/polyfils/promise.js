function myPromise(executor){
    let onResolve;
    let onReject;
    let fullfield = false;
    let rejected = false;
    let result;
    let called = false;

    function resolveFunc(val){
        fullfield = true;
        result = val;
        if(typeof onResolve === "function"){
            onResolve(val);
            console.log("inside resolve");
            called = true;
        }
    }

    function rejectFunc(val){
        rejected = true;
        result = val;
        if(typeof onReject === "function"){
            onReject(val);
            called = true;
        }
    }

    this.then = function(cb){
        onResolve = cb;
        if(fullfield && !called){
            cb(result);
            console.log("inside then");
            called = true;
        }
        return this;
    }

    this.catch = function(cb){
        onReject = cb;
        if(rejected && !called){
            cb(result);
            called = true;
        }
        return this;
    }

    executor(resolveFunc, rejectFunc);
}


//-------------------------- promise.resolve and promise.resolve methods --------------
myPromise.resolve = function(val){
   return new myPromise((resolve)=>{
    resolve(val);
   }) 
}
myPromise.reject = function(val){
   return new myPromise((res,reject)=>{
    reject(val);
   }) 
 }
//-------------------------- promise.resolve and promise.resolve methods --------------

let temp = new myPromise((res,rej)=>{
    let x = false;
    if(x){
        setTimeout(()=>{
            res("Promise resolved successfully");
        },1000);
    }else{
        // setTimeout(()=>{
            rej("Promise rejected");
        // },1000);
    }
})

temp.then((res)=>console.log("res: ", res))
.catch((err)=>console.log("err: ",err));

