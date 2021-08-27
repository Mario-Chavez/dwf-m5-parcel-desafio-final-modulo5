export function initInstructions(params) {
  const div = document.createElement("div");
  div.innerHTML = `
     
      <div class="instructions__titulo-conteiner">
          <text-el variant="">Presioná jugar
          y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
      </div>
      <div class="instructions__button-container">
         <boton-el class= "instructions__button-start" >! Jugar ¡</boton-el>
      </div>
      <div class="instructions__plays-container">
      <my-play class="welcome__play" type="piedra"></my-play>
      <my-play class="welcome__play" type="papel"></my-play>
      <my-play class="welcome__play" type="tijera"></my-play>
      </div>
  `;
  div.classList.add("instructions__main-div-container");

  const button = div.querySelector(".instructions__button-start");

  button.addEventListener("click", () => {
    params.goTo("/play");
  });
  return div;
}
