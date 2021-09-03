function letLoop(){
    for (let i=0; i<3; i++) {    // notice we use let to define i
        console.log(i);          // this will log 0, 1, 2
    }
    console.log(i);              //  this will give us a ReferenceError because i is not defined outside the loop
}  


function varLoop(){
    for (var i=0; i<3; i++) {    // notice we use var to define i
        console.log(i);          // this will log 0, 1, 2
    }
    console.log(i);              //  this will log 3
}  
console.log(varLoop());

console.log(magicalUnicorns);
var magicalUnicorns = "awesome";

console.log(magicalUnicorns); 
let magicalUnicorns = "awesome!";


var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);
