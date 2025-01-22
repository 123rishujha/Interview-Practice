let nameObj = {
    firstName: "Alex",
    lastName:"Smith", 
}
function printFullName(){
    console.log("I am", this.firstName + " " + this.lastName);
}
function getPerson(greating, punctuation){
    console.log(arguments);
    console.log(greating,this.firstName , this.lastName,punctuation);
}

let nameObj2 = {
    firstName: "John",
    lastName:"Smith",
}

// printFullName.call(nameObj2);
// printFullName.call(nameObj);

greetJohn = getPerson.bind(nameObj2);

greetJohn("hey","!");