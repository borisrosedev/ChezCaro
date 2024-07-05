import { CustomInput } from "../../interfaces/custom-input.interface"

export default function (input: CustomInput) {
  return `
            <article class="input-article">
                <section class="input-article__label-input">
                    <label for="${input.id}"></label>
                    <input 
                        id="${input.id}"
                        class="input input-article__input"
                        placeholder="${input.placeholder}"
                        type="${input.type ? input.type : "text"}" 
                    />
                </section>
                <section class="input-article__error" id="${input.id}-error"></section>
            </article>
        
        `
}
