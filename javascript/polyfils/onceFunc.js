
function once(cb,context={}){
    let result;
    return function(...args){
        if(cb){
            // result = cb(...args);
            result = cb.apply(context,args);
            cb = null;
        }
        return result;
    }
}

const myfunc = once(()=>console.log("hello"));
// const myfunc = ()=>console.log("hello");
myfunc();
myfunc();
myfunc();
myfunc();