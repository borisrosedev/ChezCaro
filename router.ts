import header from "./src/ts/layout/header/header"
import homeView from "./src/ts/views/home-view/home-view"
import logView from "./src/ts/views/log-view/log-view"

declare global {
  interface Window {
    onNavigate: (h: string) => void
  }
}

window.onNavigate = (h: string) => {
  navigateToView(h)
}

window.onpopstate = () => {
  navigateToView(window.location.hash)
}

const navigateToView = (h: string): void => {
  window.history.pushState({}, "", window.location.pathname + h)

  const app = document.getElementById("app")
  app.innerHTML = ""
  app.innerHTML += header()
  switch (h) {
    case "":
      app.innerHTML += homeView()
      break
    case "#login":
      app.innerHTML += logView()
      break
    default:
      break
  }
}

export default function () {
  navigateToView(window.location.hash)
}
