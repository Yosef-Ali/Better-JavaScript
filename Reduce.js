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
// returns same amount of items array

// .filter
// iterates over array, determines what is filtered,
// returns new array
// returns same or less amount of items in array

// .reduce
// iterates over array, uses values, to output one value
// outputs single value

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

// const filteredCart = simpleShoppingCart.filter(value => {
//   return value <= 10;
// });

const filteredCart = shoppingCart.filter((product) => {
	return product.type === 'tutorial'
})

// const filteredCart = shoppingCart.filter(({type}) => type === 'tutorial');

const total = simpleShoppingCart.reduce((total, currentPrice) => {
	return total + currentPrice
})

console.log(simpleShoppingCart)
console.log(total)
