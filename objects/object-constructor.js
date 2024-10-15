function person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new person ( "soumya", 25);
var p2 = new person ( "sony", 24);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

// method and functions both have parenthesis ( ).......