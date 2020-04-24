




function multiply (x, y) {
return x*y;
}
console.log(multiply(3,2));

//var random= Math.floor(Math.random() * 10) + 1;
//console.log(random);
/**
 * Question 2: Write a function that takes a number.
 * 
 * If the number is even, divide it by two.
 * If the number is odd, multiply it by two.
 * 
 * Return the result.
 */

function number(num){
 if (num % 2 == 0){
 return num /2 ; 
}
else {
  return num * 2;
}
}
console.log(number(3));
/** 
 * Question 3: Find the element with the ID foo and
 * change its text to the text of the element with ID baz.
 * (whatever baz has, foo should now contain the same thing).
//  */

 let foo= document.getElementById("#foo");
let baz = document.getElementById("#baz");
foo.innerText= baz.innerText; 

/**
 * Question 4: Return an array of all of the divs in the HTML.
 */



let array= [];
let div = document.querySelectorAll("div");
let arraydiv = Array.from(div);
console.log(arraydiv);
/**
 * Question 5: Create an object and set the key "foo" to "bar"; set the key "bar-baz" to 4.
 * 
 * - console.log the object's value for the key "bar-baz" using bracket notation
 * - console.log the object's value for "foo" using dot notation
 * console.log the object's value for "foo" using fooVariable.
 */
let object = {
  "foo" : "baz",
  "bar-baz": 4
}
 console.log(object["foo"]);
 console.log(object.foo);
 const fooVariable = "foo";
console.log(object[fooVariable]);

/**
 * Question 6: Make it so that the button with class "primaryBtn" console.logs anything on hover.
 */
let hoverprim = document.querySelector(".primaryBtn");
hoverprim.addEventListener ("mouseover",function(){
  console.log("yaman");
})

/**
 * Question 8: Create an array of objects. The objects can be anything you want. Loop through the array of objects and console.log each item.
 */
const animals =[{
  animal1 : "dog",
  animal2 : "cat"
},
{
  animal1 : "rabbit",
  animal2 : "fish"
}];
for (let i=0; i<animals.length; i++){
  let obj = animals[i];
  console.log(obj);
}


/**
 * Question 9: Write a function that takes a parameter named x. Have it console.log(x). Call this function with the argument 10. Explain why 10 is console.logged and not 4.
 */
let x = 4;
function normal(x){
  console.log(x);
}
normal(10);
// because we called normal which is already 10


/**
 * Question 10:
 * Declare an array with three items. Add a fourth item to it using code. Print the second item.
 */
const coffees=[ "Mocha", "Espresso", "Americano"];
coffees.push("Frappuccino");
console.log(coffees);
coffees.slice(2,-2);
console.log(coffees.slice(2, -1));
