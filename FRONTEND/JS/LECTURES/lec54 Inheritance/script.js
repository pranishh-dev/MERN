class User {
  //parent class
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log("login");
  }
  logout() {
    console.log("logout");
  }
  static sendEmail(){
    console.log("sending email.....");
  }
}

class Customer extends User {
  //customer is derived or child  class
  cart = [];
  constructor(name, email, pass) {
    super(name, email); //calls parent constructor
    this.password = pass;
    // this.name = name;
    // this.email = email;
  }
  buyProduct() {
    console.log("buyProduct");
  }
  addToCart(item) {
    this.cart.push(item);
  }
  showCart() {
    console.log(this.cart);
  }
}

class Seller extends User {
  addProduct() {
    console.log("addProduct");
  }
}

class Admin extends User {
  monitor() {
    console.log("monitor");
  }
}

const u1 = new User("Priyalal", "priyalal@eg.com");
const c1 = new Customer("Priyalal", "priyalal@eg.com", "ji");
const s1 = new Seller("Priyalal", "priyalal@eg.com");
const a1 = new Admin("Priyalal", "priyalal@eg.com");
console.log(c1);
console.log(s1);
console.log(a1);
c1.login();
s1.logout();

c1.addToCart("Mac");
c1.showCart();

class PremiumCustomer extends Customer {
  constructor(name, email, pass, premiumKey) {
    super(name, email, pass);
    this.key = premiumKey;
  }
  printKey() {
    console.log(this.key);
  }
}
let p1 = new PremiumCustomer(
  "harivansh",
  "harivansh@ladililal.com",
  "priyalalSabKuch",
  "1s2pokQ0",
);
console.log(p1);
p1.login()

//
User.sendEmail() //sendEmail fn is now bound to only User class not even its instnace or derived class
// u1.sendEmail()
// c1.sendEmail()