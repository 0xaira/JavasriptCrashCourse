class Product{
    constructor(n,p){

        this.name = n;
        this.price = p;
    }

    // --Member Function
    display(){
        console.log(this.name,this.price)
    }
    buy(){

    }
}
// When we create objects of a class, constructor function is called automatically.

let p1 = new Product("Apple",100);
let p2 = new Product("Orange",80);
p1.display();