class School {
  constructor(name, numberOfStudents) {
    this._name = name;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof(newNumberOfStudents) === 'number') {
      this._numberOfStudents = newNumberOfStudents
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let index = Math.floor(substituteTeachers.length * Math.random())
    return substituteTeachers[index]
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._level = 'primary';
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._level = 'middle';
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this._sportsteams = sportsTeams
    this._level = 'high';
  }
}

const KnowlesFirst = new Primary('Knowles', 400, 'Free')

console.log(KnowlesFirst)

KnowlesFirst.numberOfStudents = 30

console.log(KnowlesFirst)
KnowlesFirst.quickFacts()
