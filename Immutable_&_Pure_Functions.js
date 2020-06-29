// Immutable vs Mutable
// can't be changed vs can be changed
// isn't changed vs changed

// Pure Functions
// Always return the same thing, with the same input

// Pure
const addTwo = (x) => x + 2
console.log(addTwo(2))
console.log(addTwo(2))
console.log(addTwo(2))

// NOT PURE!!
let multi = 2 // External State
const addThree = (x) => x + multi
console.log(addThree(2))
multi = 4
console.log(addThree(2))
multi = 6
console.log(addThree(2))

// NOT PURE!!
let mult = 2 // External State
const addFour = (x) => {
	mult += 2
	return x + mult
}
console.log(addFour(2))
console.log(addFour(2))
console.log(addFour(2))

const BASE_SALARY = 16000
const SALARY_MULTIPLIER = 4

const makePerson = ({ firstName, age, lastName, job }) => {
	return {
		name: firstName + ' ' + lastName,
		age,
		job,
		salary: BASE_SALARY * SALARY_MULTIPLIER,
	}
}

const dev = makePerson({
	firstName: 'Scott',
	lastName: 'Tolinski',
	age: 32,
	job: 'Web Dev',
})

const hireDev = ({ dev }) => {
	const hiredDev = {
		hired: true,
		...dev,
	}
	return hiredDev
}

const ytd = 100000 // Sales year to date
const salesYearToDate = 100000

console.log(hireDev({ dev }))
