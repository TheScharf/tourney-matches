//import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from "./data/matchData";
import playerData from './data/playerData';

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={playerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
