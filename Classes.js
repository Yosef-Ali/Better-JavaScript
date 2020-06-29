class Team {
	constructor(name) {
		this.name = name
	}

	celebrate() {
		console.log('lets dance')
	}
}

class HockeyTeam extends Team {
	constructor(name) {
		super(name)
		this.type = 'Hockey'
	}

	scoreGoal() {
		console.log('he shoots, he scores')
	}
}

class FootballTeam extends Team {
	constructor(name) {
		super(name)
		this.type = 'Football'
	}

	touchdown() {
		console.log('Go for two!')
	}
}

const wings = new HockeyTeam('Red Wings')
const lions = new FootballTeam('Lions')

wings.scoreGoal()
lions.touchdown()
wings.celebrate()
lions.celebrate()

console.log(wings, lions)
