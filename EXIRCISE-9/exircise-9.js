let car = {
    make : 2019,
    model :"Tayota",
    year :2020,
    start :  ()=> {
        console.log("the car has aterted")
    }
     

};

console.log (car.make)
console.log (car.model)
console.log (car.year)


console.log (car["make"])
console.log (car.start ())