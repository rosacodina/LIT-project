import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1em;
        border: 1px solid #ccc;
      }
      h2 {
        color: red;
      }
      .paragraph {
        color: blue;
        font-size: 1.5em;
      }

      @media (min-width: 500px) {
        .paragraph {
          font-size: 3em;
        }
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
    this.counter = 10;
  }

  render() {
    return html`
      <h2>My counter</h2>
      <p class="paragraph">${this.counter}</p>
      <button @click=${this.increment}>+1</button>
    `;
  }

  increment() {
    this.counter++;
  }
}
customElements.define('eit-counter', EitCounter);
