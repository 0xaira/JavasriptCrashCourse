/*                        *OOPS

Products(Flipkart): 
Properties:
-Name
-Description
-Price
-Image
-Rating

Behaviour: 
-Buy
-View
-Share

Blueprint(Template) ->Classes
Real Instances ->Objects

Class:
We use class keyword to create a class.
Class is a blueprint of an object.
Inside a class we have properties and methods.
Properties : Data Members
Behaviour : Member Functions

To define member functions we just write normal functions inside a class.
We need special function which doesn't qualify as a member function and that is constructor function.

Constructor Function:
Constructor function is a special function which is used to construct or create an object.
To define data members , we need to initialise them inside constructor function. We use this keyword to initialise data members.

class Product{
    constructor(n,p){

        this.name = n;
        this.price = p;
    }

    --Member Function
    display(){
        console.log(this.name,this.price)
    }
    buy(){

    }
}
When we create objects of a class, constructor function is called automatically.

let p1 = new Product("Apple",100);
let p2 = new Product("Orange",80);
p1.display();

New Keyword:
New keyword is used to create an object of a class.
4Steps: 
1. New keyword creates an empty object.
2. It does a process of Linking.
3. It calls the constructor function with this keyword pointing to the newly created object.
4. Function execution starts(this belongs to the caliing site)

This Keyword: It belongs to the caliing site(from where the function or class is called).



Prototypes: It is a mechanism by which javascript objects inherit features from one another.
Every object have prototype property with itself. Protype is itself an object.
Objects are going to be linked to thier Prototypes. We can add properties and methods to the prototype of an object after the object is created.

__proto__ : It is a property of an object which points to the prototype of that object.



*/