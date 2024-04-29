// Object {}
// Two typs 1) is constre]ucture----> (singleton) word used Example(object.creat) it is constructure or singleton
//  2) is litrrals  Example(const jsUser = {
//           namme:"Afnan",
//           age: 18,
//           location: "Hangu Thall",
//           email: afnan@gmail.com
//  })

// interview Q sumble call in object
const sym = Symbol("It is Symbol like keys")

const jsUser = {
    "Full name": "Muhammad Afnan",
    name: "Afnan",
    [sym]: "It is Symbol like my keys",
    age: 19,
    location: "Hangu Thall",
    Email: "afnan@gmail.com"

}

// Two Matheds of the object calling
console.log(jsUser.name, jsUser.age);        /*First matheds*/
console.log(jsUser["name", "age", "location", "Email"]);    /* Second mathed*/
console.log(jsUser["Full name"]);
console.log(jsUser[sym]);

// Change the value in object
jsUser.Email = "afnan849@gmail.com"
// Object.freeze(jsUser)  
/*lock the value or freeze not print (jsUser.Email = "afnan897987686@gmail.com")*/
jsUser.Email = "afnan897987686@gmail.com"
// console.log(jsUser);


// Simple Function
jsUser.greetin = function () {
    console.log("Hello Simple Function");

}

// Refrence function to refer other place value 
jsUser.greetintwo = function () {
    console.log(`We make refrence with above name is ,${this.name}`)
}

console.log(jsUser.greetin());
console.log(jsUser.greetintwo());