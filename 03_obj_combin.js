// Multiple object combine
// const obj1 = { 1: 'Afnan', 2: '201155' }
// const obj2 = { 3: 'Talha', 4: '201148', 5: 'Kashif', 6: '201123' }

// const obj3 = { obj1, obj2 }

// Next Methode ------>>> (object.assign)
// const obj3 = Object.assign({}, obj1, obj2)

// Next 3rd Methode ------>>> Spread {...obj1,...obj2} Most usble
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


// object in Array 
const User = [
    {
        id: 3,
        name: 'Afnan',
        email: 'afnna@gmail.com'
    },
    {
        id: 8,
        name: 'Talha',
        email: 'talha@yaho.com'
    },
    {
        id: 12,
        name: 'Kashif',
        email: 'kashif@hotmail.com'
    }
]

User[1].id
console.log(User);

// We find the keys of the object
console.log("This is keys :", Object.keys(User));

// We find the valuse of the object
console.log("This is values :", Object.values(User));
console.log("This is Entrise :", Object.entries(User));
console.log("This is include or not the will  give True and False :", User.hasOwnProperty("Afnan"));
