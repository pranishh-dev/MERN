const user1 = {
  name: "Priyaju",
  printName(country) {
    console.log(this.name , country);
  },
};
const user2 = {
  name: "hitju",
};
const user3 = {
  name: "swamiju",
};

//call
user1.printName();
user1.printName.call(user2,"india"); //setting user2 as this in printName fn
user1.printName.call(user3,"india"); //(this,arg1,arg2)

//apply
user1.printName.apply(user2,["india"]) //(this,[arg1,arg2])

//bind
const resFn = user1.printName.bind(user2,"Bharat") 
resFn()
