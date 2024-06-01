const team = {
  _players: [{
    firstName: 'Michael',
    lastName: 'Jordan',
    age: 45
  }, {
    firstName: 'Bugs',
    lastName: 'Bunny',
    age: 30
  }, {
    firstName: 'Daffy',
    lastName: 'Duck',
    age: 27
  }],
  _games: [{
    opponent: 'Monstars',
    teamPoints: 44,
    opponentPoints: 43 
  }, {
    opponent: 'Testers',
    teamPoints: 32,
    opponentPoints: 21 
  }, {
    opponent: 'Techies',
    teamPoints: 22,
    opponentPoints: 40 
  }],
  get players () {
    return this._players
  },
  get games () {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game)
  }
}

team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)

console.log(team._players)
console.log(team._games)
