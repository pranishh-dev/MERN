function fn1() {
    return 10
}
async function fn2(num) { //returns promise thats already resolved
    return num
}
console.log(fn1());
console.log(fn2(9));

function fn3(num) { //f2n2 and fn3 acts similarly
    return Promise.resolve(num)
}
console.log(fn3(9));

// to extract just the data
fn2(100).then(data => console.log(data))
fn3(90).then(data => console.log(data))


//bad practice for using await outside async fn 
// let data = await fn3(10000)
// console.log(data);

// inside async fn 
async function fn4() {
    fn3(90).then(data => console.log(data))

    let data = await fn3(5000000000) //more readable
    console.log(data);
}


//error handlingggggg
let data;
async function userData() {
    return { name: "pranish" }
}
function func() {
    return Promise.resolve(15)
    // return Promise.reject("error ho gaya vai hamse")
}

async function funcToCall() {
    try {
        data = await userData()
        let data2 = await func()
        console.log(data.name, "age:", data2);
    }catch(err){
        console.log(err);
    }finally{
        console.log("me to hamesha run hunga");
    }
    
}
funcToCall()
