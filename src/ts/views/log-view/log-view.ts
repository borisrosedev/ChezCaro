import form from "../../components/form/form"
import { CustomFormData } from "../../interfaces/custom-form-data.interface"

export default function (isLoggingIn: boolean) {
  const formData: CustomFormData = {
    formId: "log-form",
    inputs: [
      {
        id: "email",
        type: "email",
        placeholder: "Entrez votre email"
      },
      {
        id: "password",
        type: "password",
        placeholder: "Entrez votre mot de passe"
      }
    ],
    buttons: [
      {
        type: "submit",
        textContent: "Valider"
      },
      {
        type: "reset",
        textContent: "Réinitialiser"
      }
    ]
  }

  if (!isLoggingIn) {
    formData.inputs.push({
      id: "confirmed-password",
      type: "password",
      placeholder: "Confirmez le mot de passe"
    })
  }

  const message = !isLoggingIn
    ? 'Déja inscrit(e)? Cliquez <a href="#login">ici</a>'
    : 'Pas encore inscrit(e)? Cliquez <a href="#register">ici</a>'

  return `
            <main class="main log__main">
                <section class="log__form-section">
                    ${form(formData)}
                    <section class="log__question">
                        <small>${message}</small>
                    </section>
                <section>
                
            </main>
        
        `
}
