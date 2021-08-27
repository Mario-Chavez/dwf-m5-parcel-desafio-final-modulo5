type Play = "piedra" | "papel" | "tijera";
type Game = {
  myPlay: Play;
  computerPlay: Play;
};
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [],
  },

  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    localStorage.setItem("state", JSON.stringify(newState));
  },
  //Guarda ambas jugadas en el state
  setGame(playerPlay: Play) {
    // Guardo la jugada del jugador (parametro) en el state (myPlay)
    const lastState = this.getState();
    lastState.currentGame.myPlay = playerPlay;

    // Genera una jugada random de la pc y la guardar en el state (computerPlay)
    const randomResult = Math.floor(Math.random() * 3);
    const posibleMoves: Play[] = ["tijera", "papel", "piedra"];
    lastState.currentGame.computerPlay = posibleMoves[randomResult];
    this.setState(lastState);
  },
  // Declara la lógica para saber quién ganó, y lo devuelve
  whoWins(myPlay: Play, computerPlay: Play) {
    const winningOutcomes = [
      { myPlay: "tijera", computerPlay: "papel" },
      { myPlay: "piedra", computerPlay: "tijera" },
      { myPlay: "papel", computerPlay: "piedra" },
    ];
    let result = "perdiste";
    for (const o of winningOutcomes) {
      if (o.myPlay == myPlay && o.computerPlay == computerPlay) {
        result = "ganaste";
      } else if (myPlay == computerPlay) {
        result = "empate";
      }
    }
    return result;
  },
  // Guarda el juego en el historial del state
  setHistory(game: Game) {
    const lastState = this.getState();
    lastState.history.push(game);
    this.setState(lastState);
  },
  // Recorre el historial de jugadas y devuelve cuantas veces ganó la pc y el jugador
  returnScore() {
    const lastState = this.getState();
    const score = {
      player: 0,
      computer: 0,
    };
    for (const i of lastState.history) {
      if (state.whoWins(i.myPlay, i.computerPlay) == "ganaste") {
        score.player++;
      } else if (state.whoWins(i.myPlay, i.computerPlay) == "perdiste") {
        score.computer++;
      }
    }
    return score;
  },
};

(function () {
  const localState = localStorage.getItem("state");
  if (localState) {
    state.setState(JSON.parse(localState));
  }
})();

export { state };
