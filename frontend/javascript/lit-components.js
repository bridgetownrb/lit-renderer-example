import "lit/experimental-hydrate-support.js"
import { LitElement, html, css } from "lit"

export class HappyDaysElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 2px dashed gray;
      padding: 20px;
      max-width: 300px;
    }
  `

  static properties = {
    hello: { type: String }
  }

  render() {
    return html`
      <p>Hello ${this.hello}! ${Date.now()}</p>
      <p>Light DOM slot: <slot style="font-weight: bold"></slot></p>
    `;
  }

  firstUpdated() {
    setInterval(() => {
      this.requestUpdate()
    }, 2000)
  }
}

customElements.define('happy-days', HappyDaysElement)
