import message from "../../components/message/message"
import { CustomMessage } from "../../interfaces/custom-message.interface"

export default function () {
  const homeMessage: CustomMessage = {
    mainContent: "Bienvenue sur ChezCaro",
    secondaryContent: "Venez découvrir nos plâts",
    actions: [
      {
        id: "home-menu-btn",
        textContent: "Nos plats"
      }
    ]
  }

  return `
            <main class="main home__main">
            
                <section>
                    ${message(homeMessage)}
                </section>
            
            </main>
        
        
        `
}
