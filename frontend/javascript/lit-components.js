import "lit/experimental-hydrate-support.js"
import { LitElement, html, css } from "lit"

export class HappyDaysElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: lightyellow;
      border: 2px dashed gray;
      padding: 20px;
      max-width: 350px;
    }
  `

  static properties = {
    hello: { type: String }
  }

  render() {
    return html`
      <p>Hello ${this.hello}! <strong style="letter-spacing:0.15em">${Date.now()}</strong></p>
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
