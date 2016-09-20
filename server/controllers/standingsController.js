'use strict'

const client = require('../clients/shlClient')

const today = new Date()
const year = today.getFullYear()
const dd = today.getDate()
const mm = ('0' + (today.getMonth() + 1)).slice(-2)
const currentDate = year + '-' + mm + '-' + dd

module.exports = {
  getTable: _getTable
}

function _getTable (req, res) {
  console.log(currentDate)
  client.season(year).statistics.teams.standings()
    .then(teams => {
      client.season(year).games()
        .then(games => {
          let todayGames = []
          games.games.forEach(function (game, index) {
            if (game['start_date_time'].indexOf(currentDate) > -1) {
              todayGames.push(game)
            }
          })
          // console.log('Games: ' + JSON.stringify(todayGames))
          // console.log('Teams: ' + JSON.stringify(teams))
          res.render('standings', {
            teams: teams,
            games: todayGames
          })
        })
    })
}
