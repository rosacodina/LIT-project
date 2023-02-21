import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1em;
        margin-left: 8px;
        border: 1px solid #ccc;
        text-align: center;
        width: 250px;
      }

      h2 {
        color: red;
      }

      .paragraph {
        color: blue;
        font-size: 1.5em;
      }

      p {
        color: blue;
      }

      input {
        width: 55px;
        font-size: 1.5em;
        padding: 0.5em;
        text-align: center;
      }

      button {
        height: 25px;
        width: 40px;
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
      reflect: true,
    };
  }

  constructor() {
    super();
    this.counter = 10;
  }

  render() {
    return html`
      <h2>Counter</h2>
      <p>
        Type a number in the input and then press the button below it to
        increase o decrease the counter.
      </p>
      <p class="paragraph">${this.counter}</p>
      <p>
        <input id="quantity" type="number" value="1" />
      </p>
      <button @click=${this.increase}>+ 1</button>
      <button @click=${this.decrease}>- 1</button>
    `;
  }

  get quantity() {
    return this.shadowRoot.getElementById('quantity').value;
  }

  increase() {
    this.counter += parseInt(this.quantity);
  }

  decrease() {
    this.counter -= parseInt(this.quantity);
  }
}
customElements.define('eit-counter', EitCounter);
