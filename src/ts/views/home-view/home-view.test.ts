import header from "../../layout/header/header"
import homeView from "./home-view"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

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
    const headerMainContentParagraph = screen
      .getByTestId("message")
      .querySelector("header p")
    expect(headerMainContentParagraph).toHaveTextContent(
      "Bienvenue sur ChezCaro"
    )
  })

  test("should have a button with Nos plats", () => {
    expect(screen.getByRole("button")).toHaveTextContent("Nos plats")
  })
}
