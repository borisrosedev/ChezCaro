import { CustomButton } from "./custom-button.interface"

export interface CustomMessage {
  mainContent: string
  secondaryContent: string
  actions?: Array<CustomButton>
}
