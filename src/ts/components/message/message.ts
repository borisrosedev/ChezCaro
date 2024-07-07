import { CustomMessage } from "../../interfaces/custom-message.interface"
import button from "../button/button"

export default function (message: CustomMessage) {
  const { mainContent, secondaryContent } = message
  return `
            <section class="message" data-testid="message">
                <header>
                    <figure>
                        <img src="/assets/avatar.jpg" alt="image de l'avatar symbolisant la communication" />
                    </figure>
                    <p>${mainContent}</p>
                </header>
                <section>
                    <p>${secondaryContent}</p>
                    ${message.actions && message.actions.length ? `<section> ${message.actions.map(act => button(act)).join("")}</section>` : ""}
                </section>
            </section>
        
        `
}
