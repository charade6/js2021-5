let date = new Date();
h = date.getHours();

console.log(h < 3 || h > 8);
console.log(h <= 3 && h <= 8);

let type = typeof(date.getHours());
console.log(type);