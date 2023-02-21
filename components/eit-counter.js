import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      h2 {
        color: red;
      }
    `,
  ];

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <h2>My counter</h2>
      <p class="paragraph">${this.counter}</p>
    `;
  }
}
customElements.define('eit-counter', EitCounter);
