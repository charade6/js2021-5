let product = [
    {name: '사과',price: 1200},
    {name: '배',price: 1500},
    {name: '자두',price: 1000},
    {name: '딸기',price: 2000},
    {name: '바나나',price: 1500}
];

function printProduct(product) {
    console.log(`${product.name} - ${product.price}`);
}

for (let foo of product) {
    printProduct(foo);
}