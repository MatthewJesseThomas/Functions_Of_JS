// Factory Function //
// Creating a factory function //
// function personDetails(firstName, surname, email, salary, salaryAmount) {
//     return {
//         firstName: firstName,
//         surname: surname,
//         email: email,
//         salary: "R5500",
//         salaryAmount: "ZAR" + " " + 5500,
//     }
// };
// let people1 = personDetails("Matthew","Thomas","mjt@email.com");

// console.log(people1.firstName);
// console.log(people1.salary);
// console.log(people1.salaryAmount);
//=====================================================================\\
// Constructor Function //
// function Person(person_name, person_lastName, person_age) {
//     this.name = person_name;
//     this.lastName = person_lastName;
//     this.age = person_age;

// }
//Create Objects //
// const person1 = new Person("Matthew","Thomas",22);
// const person2 = new Person("John","Noad",19);

// Access Properties //
// console.log(person1.name);
// console.log(person2.lastName);
//=====================================================================\\    
// Object Literals //
// let alcohol = {
//     brand: "Jameson",
//     price:"R450",
//     stores: '"Game"' + "," + '"PnP Liquor"' + "," +' "Spar Liquor"'
// }
// console.log(alcohol.price);
// Using the Constructor-Function //
// function Person () {
//     this.name = "RemyMartin"
// }
// let person1 = new Person();
// let person2 = new Person();
// Adding a New Property to  Person1 //
// person1.age = 22;
// person1.email = "RemyMartinVSOP@email.com";
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.email);
//======
// person2.name = "Jennessey"
// person2.age = 35;
// person2.email = "KentuckyTennesse@email.com";
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.email);
//=====================================================================\\
// Object Laterals //
// let game = {
//     gameName:"Elderscrolls",
//     gamePrice:"R450",
//     stores: '"BT Games"' + "," + '"Cash Crusaders"' + "," +' "TakeaLot"'
// }
// console.log(game.gameName);
// console.log(game.gamePrice);
// console.log(game.stores);

// let creator = game;
// game.gameName = "SkyrimV";

// console.log(game.gameName);
//=====================================================================\\
// ADDING PROPERTIES AND METHODS IN AN OBJECT //
// let func = new Function("x", "y", "return x*y");
// function secondFunction(){
//     let result;
//     result = func(5,20);
// }
// console.log(result)
//=====================================================================\\
// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
//     }
    // creating objects
    // let person1 = new Person();
    // let person2 = new Person();
// adding property to person1 object
    // person1.gender = 'male';
// adding method to person1 object
//     person1.greet = function () {
//     console.log('Hi You');
//     }
//     person1.greet(); 
// console.log(person1.gender)
//=====================================================================\\
// Local Storage //
document.getElementById('add-single-item').addEventListener("click", function(){
    window.localStorage.setItem('name', 'Matthew Jesse Thomas');

});

document.getElementById('add-another-item').addEventListener("click", function(){

});

document.getElementById('retrieve-single-item').addEventListener("click", function(){

});

document.getElementById('remove-single-item').addEventListener("click", function(){

});

document.getElementById('remove-all-items').addEventListener("click", function(){

});
// Update Function //
// function updatePage(){
//     const values = []
//     let updateThis = window.localStorage.getItem('name');
// }
//=====================================================================\\
// Looping-Over-Objects-and-Array //
let products = {
    // Need to add the games within the object and have it loop through one at a time 
    games: {}
}