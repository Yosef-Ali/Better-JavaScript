// Made up code
// imported chargeCard
const chargeCard = () =>
	new Promise((resolve, reject) => {
		// card is valid
		reject('fail!!!')
		if (true) {
			return resolve(true)
		}
		return resolve(false)
	}

chargeCard()
	.then((val) => {
		console.log(val)
	})
	.catch((err) => {
		console.log(err)
	})

// Callback hell
// chargeCard('12341234123', (res) => {
//   // time to do something
//   saveToDb(res, () => {
//     // time to do something else
//   })
// });
