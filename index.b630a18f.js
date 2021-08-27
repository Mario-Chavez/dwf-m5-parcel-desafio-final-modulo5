function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired5de;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired5de=o),o.register("7PhYn",(function(t,n){var a,o;e(t.exports,"resolve",(()=>o),(e=>o=e)),e(t.exports,"register",(()=>a),(e=>a=e));var r={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.b630a18f.js","cQkp1":"papel.1e9a9dfe.png","fvVTf":"tijeras.80889cfd.png","407lu":"piedra.92d279f2.png"}'));const r={data:{currentGame:{myPlay:"",computerPlay:""},history:[]},getState(){return this.data},setState(e){this.data=e,localStorage.setItem("state",JSON.stringify(e))},setGame(e){const t=this.getState();t.currentGame.myPlay=e;const n=Math.floor(3*Math.random());t.currentGame.computerPlay=["tijera","papel","piedra"][n],this.setState(t)},whoWins(e,t){const n=[{myPlay:"tijera",computerPlay:"papel"},{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"papel",computerPlay:"piedra"}];let a="perdiste";for(const o of n)o.myPlay==e&&o.computerPlay==t?a="ganaste":e==t&&(a="empate");return a},setHistory(e){const t=this.getState();t.history.push(e),this.setState(t)},returnScore(){const e=this.getState(),t={player:0,computer:0};for(const n of e.history)"ganaste"==r.whoWins(n.myPlay,n.computerPlay)?t.player++:"perdiste"==r.whoWins(n.myPlay,n.computerPlay)&&t.computer++;return t}};!function(){const e=localStorage.getItem("state");e&&r.setState(JSON.parse(e))}();const s=[{path:/\/welcome/,handler:function(e){const t=document.createElement("div");return t.innerHTML='\n     \n      <div class="welcome-page__titulo-conteiner">\n          <text-el variant="title"><h1>Piedra, Papel ó Tijera</h1></text-el>\n      </div>\n      <div class="welcome-page__button-container">\n         <boton-el class= "welcome__button-start" >! Empezar¡</boton-el>\n      </div>\n      <div class="welcome-page__plays-container">\n      <my-play class="welcome__play" type="piedra"></my-play>\n      <my-play class="welcome__play" type="papel"></my-play>\n      <my-play class="welcome__play" type="tijera"></my-play>\n      </div>\n  ',t.classList.add("welcome__main-div-container"),t.querySelector(".welcome__button-start").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/\/instructions/,handler:function(e){const t=document.createElement("div");return t.innerHTML='\n     \n      <div class="instructions__titulo-conteiner">\n          <text-el variant="">Presioná jugar\n          y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>\n      </div>\n      <div class="instructions__button-container">\n         <boton-el class= "instructions__button-start" >! Jugar ¡</boton-el>\n      </div>\n      <div class="instructions__plays-container">\n      <my-play class="welcome__play" type="piedra"></my-play>\n      <my-play class="welcome__play" type="papel"></my-play>\n      <my-play class="welcome__play" type="tijera"></my-play>\n      </div>\n  ',t.classList.add("instructions__main-div-container"),t.querySelector(".instructions__button-start").addEventListener("click",(()=>{e.goTo("/play")})),t}},{path:/\/play/,handler:function(e){const t=document.createElement("div");t.classList.add("game__game-container"),t.innerHTML='\n         <my-chronometer>3</my-chronometer>\n        <div class="game__player-plays-container">\n        <my-play class="welcome__play" type="piedra"></my-play>\n        <my-play class="welcome__play" type="papel"></my-play>\n        <my-play class="welcome__play" type="tijera"></my-play>\n        </div>\n    ';const n=document.createElement("style");n.innerHTML="\n       .player-play.selected {\n           animation: move-up 400ms forwards;\n       }\n       @keyframes move-up {\n           0% {\n               opacity: 0.5;\n               transform: translateY(0);\n           }\n           100% {\n               opacity: 1;\n               transform: translateY(-40px);\n           }\n       }\n       \n       .player-play{\n           position: relative;\n           top: 20px;\n           opacity: 0.5;\n       }\n       .game__player-plays-container{\n        display: flex;\n        justify-content: center;\n        text-align: center;\n        margin: 0 auto;\n        gap: 20px;\n        grid-template-columns: 1fr 1fr 1fr;\n        max-width: 70vh;\n       }\n   ",t.querySelector(".game__player-plays-container").appendChild(n);const a=t.querySelector(".game__player-plays-container").children;for(let e of a)e.classList.add("player-play"),e.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("selected"))t.classList.remove("selected");else{for(let e of a)e.classList.contains("selected")&&e.classList.remove("selected");t.classList.add("selected")}}));let o=4,s=t.querySelector(".selected")||"none";const i=setInterval((()=>{o--,s=t.querySelector(".selected")||"none",0==o&&"none"==s?(t.innerHTML='\n               <text-el variant="title"><h1>Pasó el tiempo </h1></text-el>\n               </div>\n                <div class="instructions__titulo-conteiner">\n                    <text-el variant="">Elige antes de los 3 segundos.</text-el>\n                </div>\n                <div class="instructions__button-container">\n                <boton-el class= "instructions__button-start" >! Volver a jugar ¡</boton-el>\n               </div>\n               \n        ',t.querySelector(".instructions__button-container").addEventListener("click",(()=>{e.goTo("/play")}))):0==o&&(!function(n){r.setGame(n);const a=r.getState(),o=a.currentGame.computerPlay,s=a.currentGame.myPlay,i={myPlay:a.currentGame.myPlay,computerPlay:a.currentGame.computerPlay};t.innerHTML=`\n      <div class="game__show-both-plays-container game__fade-in-down">\n          <my-play type="${o}" opponent="true"></my-play>\n      </div>\n      <div class="game__show-both-plays-container game__fade-in-up">\n          <my-play type="${s}"></my-play>\n      </div>\n      `;const l=r.whoWins(s,o),c=setInterval((()=>{"empate"==l?e.goTo("/game"):"ganaste"==l?(r.setHistory(i),e.goTo("/result/win")):"perdiste"==l&&(r.setHistory(i),e.goTo("/result/lose")),window.clearInterval(c)}),2e3)}(s.type),window.clearInterval(i))}),1e3);return t}},{path:/\/game/,handler:function(e){r.returnScore();const t=document.createElement("div");return t.innerHTML='\n       \n  <div class="rersultado-page__titulo-conteiner">\n          <text-el variant="title"><h1>Empate</h1></text-el>\n      </div>\n      <text-el variant="">Tira de vuelta</text-el>\n    <div class="instructions__button-container">\n     <boton-el class= "instructions__button-start" >! Volver a jugar ¡</boton-el>\n    </div>\n    \n',t.classList.add("instructions__main-div-container"),t.classList.add("instructions__main-div-container"),t.querySelector(".instructions__button-start").addEventListener("click",(()=>{e.goTo("/play")})),t}},{path:/\/result\/lose/,handler:function(e){const t=r.returnScore(),n=document.createElement("div");return n.innerHTML=`\n       \n  <div class="rersultado-page__titulo-conteiner">\n          <text-el variant="title"><h1>Perdiste perrin</h1></text-el>\n      </div>\n      <text-el variant="">Vos : ${t.player}</text-el>\n      <text-el variant="">La maquina: ${t.computer}</text-el>\n    <div class="instructions__button-container">\n     <boton-el class= "instructions__button-start" >! Volver a jugar ¡</boton-el>\n    </div>\n    \n`,n.classList.add("instructions__main-div-container"),n.classList.add("instructions__main-div-container"),n.querySelector(".instructions__button-start").addEventListener("click",(()=>{e.goTo("/play")})),n}},{path:/\/result\/win/,handler:function(e){const t=r.returnScore(),n=document.createElement("div");return n.innerHTML=`\n        <div class="reultado-page__titulo-conteiner">\n  <text-el variant="title"><h1>Ganaste perrin</h1></text-el>\n</div>\n  <text-el variant="">vos : ${t.player}</text-el>\n  <text-el variant="">la maquina: ${t.computer}</text-el>\n<div class="instructions__button-container">\n   <boton-el class= "instructions__button-start" >! volver a jugar ¡</boton-el>\n</div>\n    `,n.classList.add("instructions__main-div-container"),n.querySelector(".instructions__button-start").addEventListener("click",(()=>{e.goTo("/play")})),n}}];var i;o.register("kVZsc",(function(t,n){var a;e(t.exports,"getBundleURL",(()=>a),(e=>a=e));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=t),t}})),i=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("cQkp1");var l;l=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("fvVTf");var c;c=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("407lu"),function(){!function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),n=document.createElement("div"),a=document.createElement("style");a.innerHTML="\n      .title{\n        margin: 5vh auto;\n        font-size: 10vh;\n        text-align: center;\n        font-family: 'Rampart One', cursive;\n        color:#009048;\n\n      }\n      .body{\n        font-size: 8vh;\n        text-align: center;\n        margin: 9vh auto;\n        font-family: 'Odibee Sans', cursive;\n      }\n      .button-text{\n        font-size: 22px;\n        color: #9CBBE9;\n        text-align: center;\n        margin: 15px auto;\n        font-family: 'Odibee Sans', cursive;\n      }\n      ",n.className=e,n.textContent=this.textContent,t.appendChild(n),t.appendChild(a)}}customElements.define("text-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=this.textContent,n=document.createElement("style");n.innerHTML="\n      .root{\n        max-width: 40vh;\n        heigth: 8vh;\n        margin: 2vh auto ;\n      } \n      .button{\n        width: 100%;                \n        padding:15px 13px;\n        margin-top:3px\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: #006CFC;\n        font-family: 'Odibee Sans', cursive;\n        font-size:45px;\n        color: white;\n      }\n      \n      \n      ";const a=document.createElement("div");a.classList.add("root"),a.innerHTML=`\n      <button class="button">${t}</button>  \n      `,e.appendChild(n),e.appendChild(a)}}customElements.define("boton-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.opponent=!1,this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.opponent=JSON.parse(this.getAttribute("opponent"))||!1}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n            .rotate{\n                transform: scaleY(-1);\n              }\n              \n              .play{\n                width: 15vh;\n                height: 28vh;\n              }  \n            ";const t=document.createElement("img");"tijera"==this.type?t.src=l:"papel"==this.type?t.src=i:t.src=c,1==this.opponent&&t.classList.add("rotate"),t.classList.add("play"),this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("my-play",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("div"),t=document.createElement("style");let n=3;t.innerHTML="\n      .container{\n        margin: 5vh auto;\n        text-align: center;\n        font-family: 'Rampart One', cursive;\n        color:#009048;\n      }\n      .countdown{\n        font-size: 35vh;\n\n      }\n      ",e.innerHTML='\n      <div class= "container">\n      <span class="countdown">3</span>\n      </div>\n      ';const a=e.querySelector(".countdown"),o=setInterval((()=>{a.textContent=n.toString(),0==n&&(clearInterval(o),this.shadow.removeChild(e)),n--}),1e3);this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("my-chronometer",e)}();!function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const a of s)if(a.path.test(n)){const n=a.handler({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}t("/welcome"),location.host.includes("github.io"),t("/welcome"),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.b630a18f.js.map
