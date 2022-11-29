require("./module");

const person = {
    name: "Alexey",
    age: 28
}

function getName(p){
    return p.name;
}
console.log(getName(person));