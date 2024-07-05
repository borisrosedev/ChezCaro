import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import button from "./button"
import { CustomButton } from "../../interfaces/custom-button.interface"

describe("button unit test suite", () => {
  beforeAll(() => {
    const customButton: CustomButton = {
      textContent: "Valider",
      type: "button"
    }

    document.body.innerHTML += button(customButton)
  })
  tests()
})

function tests() {
  test("should have a textContent Valider", () => {
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Valider")
  })
}
