const team = {
  _players: [
    {firstname: 'joe', lastname: 'doe', age: 20},
    {firstname: 'john', lastname: 'day', age: 20},
    {firstname: 'jo', lastname: 'burn', age: 20}
  ],
  _games: [
    {opponent: 'football', teamPoints: 0, opponentPoints: 0},
    {opponent: 'basketball', teamPoints: 0, opponentPoints: 0},
    {opponent: 'ping pong', teamPoints: 0, opponentPoints: 0}
  ],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
    this._players.push({
      firstname: newFirstName,
      lastname: newLastName,
      newAge: newAge
    })
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    })
  },
  get totalGames(){
    return this._games.length
  },
  get averageScore(){
    let points = 0
    for (game in this._games){
      points += this._games[game].teamPoints
    }
    return points / this.totalGames
  }
}

team.addGame('Titans', 100, 98)
console.log(team._games)
console.log(team.totalGames)
console.log(team.averageScore)
