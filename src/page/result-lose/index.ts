import { state } from "../../state";
export function initResultLose(params) {
  const result = state.returnScore();
  const div = document.createElement("div");
  div.innerHTML = `
       
  <div class="rersultado-page__titulo-conteiner">
          <text-el variant="title"><h1>Perdiste perrin</h1></text-el>
      </div>
      <text-el variant="">Vos : ${result.player}</text-el>
      <text-el variant="">La maquina: ${result.computer}</text-el>
    <div class="instructions__button-container">
     <boton-el class= "instructions__button-start" >! Volver a jugar ¡</boton-el>
    </div>
    
`;
  div.classList.add("instructions__main-div-container");
  div.classList.add("instructions__main-div-container");

  const button = div.querySelector(".instructions__button-start");

  button.addEventListener("click", () => {
    params.goTo("/play");
  });
  return div;
}
