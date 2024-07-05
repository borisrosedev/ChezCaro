import { CustomFormData } from "../../interfaces/custom-form-data.interface"
import button from "../button/button"
import inputArticle from "../input-article/input-article"

export default function (data: CustomFormData) {
  const { formId, inputs, buttons } = data
  return `
            <form id="${formId}" class="form">
                <section class="form__inputs">
                    ${inputs.map(el => inputArticle(el)).join("")}
                </section>
                <section class="form__buttons">
                    ${buttons.map(el => button(el)).join("")}
                </section>
            </form>
        
        `
}
