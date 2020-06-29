const simpleShoppingCart = [10, 20, 25, 5, 10]

const shoppingCart = [
	{
		sku: '1234',
		price: 10,
		type: 't-shirt',
	},
	{
		sku: '1233334',
		price: 16,
		type: 'tutorial',
	},
	{
		sku: '12111134',
		price: 30,
		type: 'tutorial',
	},
]

// .map
// iteratates over array, perform function on each item
// returns new array

// Loops through array of numbers and modifies each one
// const discountCart = simpleShoppingCart.map((value) => {
//   return value * .75;
// });
// const discountCart = simpleShoppingCart.map(value => value * .75);

// Loops through items in cart, builds object with all properties from
// cart and then adds a new property with the sales price
const discountCart = shoppingCart.map((value) => {
	return {
		...value,
		salePrice: value.price * 0.75,
	}
})

console.log(shoppingCart)
console.log(discountCart)
