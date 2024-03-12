import { CpxElement } from "../../element";
import { Tooltip } from "../../utils/tooltip"; // Import the Tooltip API

export class CpxToolTip extends CpxElement implements Element {
  constructor() {
    super();
    this.setAttribute('tool-tip', '');
    // this.initializeTooltip(); // Initialize the Tooltip API
  }

  connectedCallback(): void {
    this.render();
    this.initializeTooltip();

  }

  initializeTooltip() {
    // Initialize the Tooltip API targeting elements with the 'tool-tip' attribute
    Tooltip('[tool-tip]');  // Trigger calculation and showing of tooltip content after initialization
  }

  render() {
    // Display the content
    this.innerHTML = `${this.initialContent}`;
  }
}

customElements.define(`tool-tip`, CpxToolTip);
