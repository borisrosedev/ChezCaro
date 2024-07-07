import { CustomButton } from "../../interfaces/custom-button.interface"

export default function (button: CustomButton) {
  return `
            <button 
                class="button ${button.className ? button.className : ""}"
                type="${button.type ? button.type : "button"}"
                id="${button.id ? button.id : ""}"
            >
                ${button.textContent}
            </button>
        `
}
