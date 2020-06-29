const newArray = ['hi', 'scott', 'newItem', 'spreadftw']
const [a, b, ...c] = newArray
// const a = newArray[0];
// const b = newArray[1];
console.log(c)

// const person = {
//   name: "Scott",
//   age: 32,
//   job: "Web Dev"
// };

// const makePerson = (name, age, job) => {
//   return {
//     name: name,
//     age: age,
//     job: job
//   };
// };

const makePerson = (name, age, job) => {
	return {
		name,
		age,
		job,
	}
}

const dev = makePerson('scott', 32, 'web dev')
// X const name = dev.name;
// X const devName = dev.name;
const { name, ...rest } = dev

// this.props.names
// const { names } = this.props;
// ...this.props

console.log(name, rest)
