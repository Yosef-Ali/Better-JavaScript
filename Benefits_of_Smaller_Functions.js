const cart = ['10', '5', '15']

const fakeAPICharge = (total) => true
const fakeSendRecipt = (total) => true

const checkout = (cart) => {
	let total = cart.reduce((tempTotal, item) => tempTotal + item)
	total = total + 10
	const orderSuccess = fakeAPICharge(total)
	if (orderSuccess) {
		fakeSendRecipt({
			email: 'fakeemail@gmail.com',
			total,
		})
	}
	return orderSuccess
}

checkout(cart)

// Final Code
const cart = [10, 5, 15]

const SHIPPING_COST = 10

const fakeAPICharge = (total) => true
const fakeSendRecipt = (total) => true

const getSubTotal = (cart) => cart.reduce((tempTotal, item) => tempTotal + item)
const getTotal = (subTotal) => subTotal + SHIPPING_COST
const sendRecipt = ({ email, total }) =>
	fakeSendRecipt({
		email,
		total,
	})

const checkout = (cart) => {
	const subTotal = getSubTotal(cart)
	const total = getTotal(subTotal)
	const orderSuccess = fakeAPICharge(total)
	if (orderSuccess) {
		sendRecipt({ email: 'fakeemail@gmail.com', total })
	}
	return orderSuccess
}

checkout(cart)
