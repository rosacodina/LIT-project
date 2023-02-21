import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1em;
        margin-left: 5px;
        border: 1px solid #ccc;
        text-align: center;
        width: 200px;
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
      counter: { type: Number }, //property component
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
      <button @click=${this.increase}>+1</button>
      <button @click=${this.decrease}>+1</button>
    `;
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
customElements.define('eit-counter', EitCounter);
