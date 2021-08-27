import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initBotonComp } from "./components/button";
import { initMyPlay } from "./components/my-play/inedx";
import { initMyChronometer } from "./components/cronometro/index";

(function () {
  initTextComp();
  initBotonComp();
  initMyPlay();
  initMyChronometer();
  const root = document.querySelector(".root");
  initRouter(root);
})();
