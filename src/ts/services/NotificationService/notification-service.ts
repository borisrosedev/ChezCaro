import { CustomNotification } from "../../interfaces/custom-notification.interface"

export default class NotificationService {
  private _notification: CustomNotification

  constructor() {}

  get notification() {
    return this._notification
  }

  set notification(val) {
    this._notification = val
  }
}
