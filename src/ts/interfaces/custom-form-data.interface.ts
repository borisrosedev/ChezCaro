import { CustomButton } from "./custom-button.interface"
import { CustomInput } from "./custom-input.interface"

export interface CustomFormData {
  formId: string
  inputs: Array<CustomInput>
  buttons: Array<CustomButton>
}
