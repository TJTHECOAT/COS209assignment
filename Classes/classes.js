/* In javascript, Classes are templates for creating oject. 
They encapsulate data with code to work on that data.
They also support constructors, methods, and   */ 

class Student {
    constructor(matric_no, name){
        this.matric_no = matric_no;
        this.name = name;
    }
    greet(){
        console.log('Name: ${this.name},')
        console.log('MatricNo: ${this.matric_no},')

    }
}