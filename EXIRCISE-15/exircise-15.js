const people = [
    {name: "alice", age: 25, city: "mogdisho"},
     {name: "alice", age: 25, city: "mogdisho"},
     {name: "alice", age: 25, city: "mogdisho"}
];
console.log ("properties and values of each person:\n");
for (const person of people) {
    for (const key in person) {
        console.log (key + ":" + person [key]);
    }
    console.log ("---")
}
