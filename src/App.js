import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [computer, setComputer] = useState(null);
  const [player, setPlayer] = useState(null);
  const [pointsComputer, setPointsComputer] = useState(0);
  const [pointsPlayer, setPointsPlayer] = useState(0);
  const [results, setResults] = useState("Escolha uma jogada");
  const [showButton, setShowButton] = useState(true);

  const computerRandom = () => {
    let res = Math.floor(Math.random() * 3);
    if (res === 0) {
      setComputer("Pedra")
    } else if (res === 1) {
      setComputer("Papel")
    } else {
      setComputer("Tesoura")
    }
  }

  const pedra = () => {
    setPlayer("Pedra")
    computerRandom()
    setShowButton(!showButton);
  }

  const papel = () => {
    setPlayer("Papel")
    computerRandom()
    setShowButton(!showButton);
  }

  const tesoura = () => {
    setPlayer("Tesoura")
    computerRandom()
    setShowButton(!showButton);
  }

  const reset = () => {
    setPlayer(null)
    setComputer(null)
    setShowButton(!showButton);
    setResults("Escolha uma jogada");
  }

  useEffect(() => {
    winningCondition();
  }, [player]);

  const winningCondition = () => {
    let res;

    if (player !== null) {
      if (computer === player) {
        res = "Empate."
      } else if (player === "Pedra" && computer === "Tesoura") {
        res = "Você ganhou!"
        setPointsPlayer(pointsPlayer + 1)
      } else if (player === "Papel" && computer === "Pedra") {
        res = "Você ganhou!"
        setPointsPlayer(pointsPlayer + 1)
      } else if (player === "Tesoura" && computer === "Papel") {
        res = "Você ganhou!"
        setPointsPlayer(pointsPlayer + 1)
      } else {
        res = "Perdeu. Tente de novo!"
        setPointsComputer(pointsComputer + 1)
      }
      setResults(res);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Computador {pointsComputer} | {pointsPlayer} Jogador
        </div>
        <div>
          {results}
        </div>
        <div>
          <h2>Computador</h2>
          <div>
            {computer}
          </div>
          <div>
            {player}
          </div>
          <h2>Jogador</h2>
          <div> 
            {
              showButton &&
            <div>
              <button onClick={pedra}>Pedra</button>
              <button onClick={papel}>Papel</button>
              <button onClick={tesoura}>Tesoura</button>
            </div>
            }
          </div>

        </div>
        <div>
          <button onClick={reset}>Jogar Novamente</button>
        </div>
        <h6>Por: Joao Ricardo Cavali - Kenzie Academy Brasil</h6>
      </header>
    </div>
  );
}

export default App;
