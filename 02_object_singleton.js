// Singleton OR constructor object

// const tinderUser = new object()

let tinderUser = {}/*--------> It is non singleton Or constructor oibject*/

// tinderUser.name = "Afnan",
//     tinderUser.id = "201155",
//     tinderUser.email = "m.afnan@gmail.com"

// console.log(tinderUser);

// Multiple OR nestded object in single object include

const multiple_object = {
    email: "m.afnan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Afnan",
            lastname: "Muhammad"

        }

    }
}
// Three Methodes 
console.log(multiple_object.fullname);
console.log(multiple_object.fullname.userfullname);
console.log(multiple_object.fullname.userfullname.firstname);