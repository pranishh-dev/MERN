let a =function(){
    console.log("a");
}
function b(fn) {
    fn()
    console.log("b");
}
b(a) // a() is used as callback func