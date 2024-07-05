export default class LogContainer {
  isLoggingIn: boolean

  constructor(isLoggingIn: boolean) {
    this.isLoggingIn = isLoggingIn
    const form = document.getElementById("log-form")
    form.addEventListener("submit", e => this.onSubmit(e))
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault()
    const emailInputValue = (
      document.getElementById("email") as HTMLInputElement
    ).value

    const passwordInputValue = (
      document.getElementById("password") as HTMLInputElement
    ).value

    if (this.isLoggingIn) {
      if (!emailInputValue || !passwordInputValue) {
        return
      } else {
        console.log({ email: emailInputValue, password: passwordInputValue })
      }
    }

    if (!this.isLoggingIn) {
      const confirmPasswordValue = (
        document.getElementById("confirmed-password") as HTMLInputElement
      ).value
      if (!emailInputValue || !passwordInputValue || !confirmPasswordValue) {
        return
      } else {
        console.log({
          email: emailInputValue,
          password: passwordInputValue,
          confirmedPassword: confirmPasswordValue
        })
      }
    }
  }
}
