// Object Distrcuture 
const course = {
    Bookname: "JavaScript",
    Price: "99999",
    CourseTriner: 'Afnan Bangash'
}

// course.Bookname        /*First Method*/

const { Bookname } = course
const { Bookname: Book } = course   /*code distructure Boolname:Book is second name for writin and method*/
console.log(Bookname);       /*same work*/
console.log(Book);


