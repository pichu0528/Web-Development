var faker = require('faker');
var randomProduct,randomPrice;

console.log("===========================");
console.log("WELCOME TO MY SHOP!")
console.log("===========================");
for(var i = 0; i < 10; i++){
    randomProduct = faker.commerce.productName();
    randomPrice = faker.commerce.price();
    console.log(randomProduct + " - $" + randomPrice);
}