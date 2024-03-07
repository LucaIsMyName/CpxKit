import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

export class CpxSuspenseAll extends CpxElement implements Element {
  classNames: string;
  bounceDuration: number;
  debounceTimeout: number | null;
  hasIcon: boolean;

  constructor() {
    super();
    this.classNames = this.getAttribute("suspense-all:class") || "";
    this.bounceDuration = eval(this.getAttribute("suspense-all:bounce-duration")) || 500; // Default bounce duration
    this.debounceTimeout = null;
    this.hasIcon = eval(this.getAttribute("suspense-all:has-icon")) || true;
  }

  connectedCallback(): void {
    this.render();
    // Wait for the entire document to be loaded
    document.addEventListener("DOMContentLoaded", () => {
      // Show the content after everything is loaded
      this.showContent();
    });
  }

  // Debounce function
  debounce(func: Function, delay: number): void {
    clearTimeout(this.debounceTimeout as number);
    this.debounceTimeout = setTimeout(() => func(), delay);
  }

  showContent(): void {
    // Display the actual content with debounce effect
    this.debounce(() => {
      const content = this.initialContent || "";
      this.innerHTML = `
        <div class="suspense-all ${this.classNames}">
          ${content}
        </div>
      `;
    }, eval(this.bounceDuration)); // Adjust the delay as needed (e.g., 300ms)
  }

  render() {
    // Display loading screen initially
    this.innerHTML = `
    <section class="suspense-all ${this.classNames}">
      ${
        this.hasIcon === true
          ? `
            <div class="suspense-all__icon">${Icon.arrowPath}</div>
          `
          : ``
      }
    </section>`;
  }
}

customElements.define(`suspense-all`, CpxSuspenseAll);
