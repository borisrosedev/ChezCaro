export default class CustomConsoleService {
  private _content: string

  constructor() {}

  get content() {
    return this._content
  }

  set content(val) {
    this._content = val
  }
}
