import playerData from "../data/playerData"

export const preparePlayerData = () => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if fthe gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);
    // Assigns the value to the wins kay
    player.wins = currentWins;

    return player;
  });
}
// output: [{player}, {player}] (each player having a win and a numerical value)