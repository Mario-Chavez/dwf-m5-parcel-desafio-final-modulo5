import { state } from "../../state";

export function initPlayGame(params) {
  const countDown: number = 3;
  const div = document.createElement("div");
  div.classList.add("game__game-container");
  div.innerHTML = `
         <my-chronometer>${countDown}</my-chronometer>
        <div class="game__player-plays-container">
        <my-play class="welcome__play" type="piedra"></my-play>
        <my-play class="welcome__play" type="papel"></my-play>
        <my-play class="welcome__play" type="tijera"></my-play>
        </div>
    `;

  // timesUp modifica la div principal cuando termina el contador
  function timesUp() {
    div.innerHTML = `
               <text-el variant="title"><h1>Pasó el tiempo </h1></text-el>
               </div>
                <div class="instructions__titulo-conteiner">
                    <text-el variant="">Elige antes de los 3 segundos.</text-el>
                </div>
                <div class="instructions__button-container">
                <boton-el class= "instructions__button-start" >! Volver a jugar ¡</boton-el>
               </div>
               
        `;
    const goToGameButton = div.querySelector(".instructions__button-container");

    goToGameButton.addEventListener("click", () => {
      params.goTo("/play");
    });
  }
  // showBothPlays muestra ambas jugadas en la pantalla y analiza si se empató, perdió, o ganó.
  // guarda las jugadas en el state y el resultado si es ganador o perdedor, si se empata, reinicia el juego.

  function showBothPlays(playerPlay) {
    state.setGame(playerPlay);
    const currentState = state.getState();
    const computerPlay = currentState.currentGame.computerPlay;
    const myPlay = currentState.currentGame.myPlay;
    const game = {
      myPlay: currentState.currentGame.myPlay,
      computerPlay: currentState.currentGame.computerPlay,
    };
    div.innerHTML = `
      <div class="game__show-both-plays-container game__fade-in-down">
          <my-play type="${computerPlay}" opponent="true"></my-play>
      </div>
      <div class="game__show-both-plays-container game__fade-in-up">
          <my-play type="${myPlay}"></my-play>
      </div>
      `;
    //dependiendo la eleccion redireccionamos las pages
    const winner = state.whoWins(myPlay, computerPlay);
    const intervalUntilResult = setInterval(() => {
      if (winner == "empate") {
        params.goTo("/game");
      } else if (winner == "ganaste") {
        state.setHistory(game);
        params.goTo("/result/win");
      } else if (winner == "perdiste") {
        state.setHistory(game);
        params.goTo("/result/lose");
      }
      window.clearInterval(intervalUntilResult);
    }, 2000);
  }

  /* aqui iria el style */
  const style = document.createElement("style");
  style.innerHTML = `
       .player-play.selected {
           animation: move-up 400ms forwards;
       }
       @keyframes move-up {
           0% {
               opacity: 0.5;
               transform: translateY(0);
           }
           100% {
               opacity: 1;
               transform: translateY(-40px);
           }
       }
       
       .player-play{
           position: relative;
           top: 20px;
           opacity: 0.5;
       }
       .game__player-plays-container{
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 70vh;
       }
   `;

  div.querySelector(".game__player-plays-container").appendChild(style);

  const playerPlaysArray = div.querySelector(
    ".game__player-plays-container"
  ).children;

  // Agrego los event listeners a cada una de las jugadas de el/la jugador/a,
  // y agrega la clase "selected"
  for (let p of playerPlaysArray) {
    p.classList.add("player-play");
    p.addEventListener("click", (e) => {
      const thisPlayEl: any = e.target;
      if (thisPlayEl.classList.contains("selected")) {
        thisPlayEl.classList.remove("selected");
      } else {
        for (let i of playerPlaysArray) {
          if (i.classList.contains("selected")) {
            i.classList.remove("selected");
          }
        }
        thisPlayEl.classList.add("selected");
      }
    });
  }

  // Agrego + 1 asi termina en 1
  let intervalCounter = countDown + 1;
  let playerPlayEl: any = div.querySelector(".selected") || "none";

  /* 
     crea un nuevo cuenta regresiva despendienso si el jugador eligio o no, y realiza diferentes acciones
    */
  const countDownInterval = setInterval(() => {
    intervalCounter--;

    playerPlayEl = div.querySelector(".selected") || "none";
    if (intervalCounter == 0 && playerPlayEl == "none") {
      timesUp();
    } else if (intervalCounter == 0) {
      showBothPlays(playerPlayEl.type);
      window.clearInterval(countDownInterval);
    }
  }, 1000);

  return div;
}
