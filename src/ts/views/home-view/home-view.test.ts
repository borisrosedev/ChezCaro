import header from "../../layout/header/header"
import homeView from "./home-view"
import { screen } from "@testing-library/dom"

let app
describe("HomeView Suite", () => {
  beforeAll(() => {
    app = document.createElement("div")
    app.id = "app"
    document.body.appendChild(app)
    app.innerHTML += header()
    app.innerHTML += homeView()
  })

  tests()
})

function tests() {
  test("should a text HomeView", () => {
    expect(screen.getByText("Home View")).toBeTruthy()
  })
}
