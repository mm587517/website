import Router from "next/router";
import NProgress from "nprogress";

let timer: NodeJS.Timeout;
let state: "loading" | "stop";
let activeRequests = 0;
const delay = 50;

function load() {
  if (state === "loading") {
    return;
  }

  state = "loading";

  timer = setTimeout(function () {
    NProgress.start();
  }, delay);
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = "stop";

  clearTimeout(timer);
  NProgress.done();
}

Router.events.on("routeChangeStart", load);
Router.events.on("routeChangeComplete", stop);
Router.events.on("routeChangeError", stop);