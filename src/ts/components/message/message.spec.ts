import { CustomMessage } from "../../interfaces/custom-message.interface"
import message from "./message"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import { userEvent } from "@testing-library/user-event"

describe("message component suite", () => {
  beforeAll(() => {
    const mess: CustomMessage = {
      mainContent: "Salut",
      secondaryContent: "Comment tu vas ?",
      actions: [
        {
          id: "answer-action",
          textContent: "Répondre"
        }
      ]
    }

    document.body.innerHTML += message(mess)
  })

  tests()
})

function tests() {
  test("should have a message on the user interface", () => {
    const messageUI = screen.getByTestId("message")
    expect(messageUI).toBeTruthy()
  })

  test("should have a mainContent Salut", () => {
    const mainContentParagraph = screen
      .getByTestId("message")
      .querySelector("header p")

    expect(mainContentParagraph).toHaveTextContent("Salut")
  })

  test("should display a button", () => {
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Répondre")
  })
}
