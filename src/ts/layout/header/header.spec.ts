import header from "./header"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

let app: any

describe("Header suite", () => {
  beforeAll(() => {
    app = document.createElement("div")
    app.id = "app"
    document.body.appendChild(app)
    app.innerHTML = ""
    app.innerHTML += header()
  })
  tests()
})

function tests() {
  test("shoud an anchor with ChezCaro as textContent", () => {
    expect(screen.getByTestId("home-anchor")).toHaveTextContent("ChezCaro")
  })

  test('shoud a nav with first child a with innerHTML <i class="fa-solid fa-house"></i>', () => {
    const nav = document.getElementsByTagName("nav")[0]
    const navChildren = Array.from(nav.children)
    expect(navChildren[0].innerHTML).toContain(
      '<i class="fa-solid fa-house"></i>'
    )
  })
}
