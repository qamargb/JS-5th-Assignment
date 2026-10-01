const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 250000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Mobile",
    price: 220000,
    stock: 0,
    brand: "Samsung",
    rating: 4.6,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 350000,
    stock: 5,
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 280000,
    stock: 3,
    brand: "Dell",
    rating: 4.5,
  },
  {
    id: 5,
    name: "AirPods Pro",
    category: "Accessories",
    price: 65000,
    stock: 15,
    brand: "Apple",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Galaxy Buds",
    category: "Accessories",
    price: 35000,
    stock: 0,
    brand: "Samsung",
    rating: 4.3,
  },
  {
    id: 7,
    name: "HP Pavilion",
    category: "Laptop",
    price: 180000,
    stock: 7,
    brand: "HP",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Samsung A55",
    category: "Mobile",
    price: 120000,
    stock: 12,
    brand: "Samsung",
    rating: 4.4,
  },
];

const productName = products.map(product => product.name)
console.log("Product Name:",productName)



const productPrice = products.map(product => product.price)
console.log("Product price:", productPrice)

// const priceName = products.map(function(product) {
//   return `Products Name:${product.name}  Rs. ${product.price}`;
// });



const priceAndName = products.map(product => `Products Name: ${product.name} Rs. ${product.price}`)
console.log(priceAndName);



const discountPrice = products.map(product => `${product.price} ${product.price * 0.90}`)
console.log(discountPrice)



const stoks = products.filter(product => product.stock > 0)
console.log(stoks)



const category = products.filter(product => product.category === "Mobile" )
console.log(category)



const highPrice = products.filter(product => product.price > 200000);
console.log(highPrice)



const highRating = products.filter(product => product.rating >= 4.5)
console.log(highRating)



const appleProduct = products.filter(product => product.brand === "Apple")
console.log(appleProduct)



const priceAndstoke = products.filter(product => product.price < 200000 && product.stock > 0)
console.log(priceAndstoke)



const laptops = products.filter(product => product.category === "Laptop" && product.stock > 0 ).map(product => product.name)
console.log(laptops)



const discountedApple = products.filter(product => product.brand === "Apple").map(product => `Products Name: ${product.name} Discounted Price: ${product.price * 0.85}`)
console.log(discountedApple)



const InStockMobileNames = products.filter(product => product.stock > 0 && product.category === "Mobile").map(product => `${product.name} - Rs. ${product.price}`)
console.log(InStockMobileNames)



const Challenge = products.filter(product => product.stock > 0 && product.rating >= 4.5 && product.price < 300000).map(product => `Name:${product.name} Price: ${product.price}`)
console.log(Challenge)
