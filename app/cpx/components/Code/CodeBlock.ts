import { CpxElement } from "../../element";
import { Cpx } from "../../index";
import { Copy } from "../../utils/copy";
import { Icon } from "../../utils/icons";
import { String } from "../../utils/string";
import hljs from "highlight.js/lib/core"; // Import the core module
import "highlight.js/styles/default.css"; // Import the default highlight.js stylesheet

// Import specific language modules as needed
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("javascript", javascript); // Register JavaScript language
hljs.registerLanguage("php", php); // Register PHP language
hljs.registerLanguage("bash", bash); // Register Bash language

export class CpxCodeBlock extends CpxElement {
  classNames: string;
  appearance: string;
  lang: string;
  title: string;
  hasCopyButton: boolean;
  hasHeader: boolean;
  theme: string;

  constructor() {
    super();
    this.ID = this.getAttribute("id") || Cpx.Id.Generate.hex(6).replace(" ", "");
    this.classNames = this.getAttribute("code-block:class") || "";
    this.appearance = this.getAttribute("code-block:appearance") || "default";
    this.title = this.getAttribute("code-block:title") || "Code";
    this.lang = this.getAttribute("code-block:lang") || "js";
    this.hasCopyButton = eval(this.getAttribute("code-block:has-copy-button")) || true;
    this.hasHeader = eval(this.getAttribute("code-block:has-header")) || true;
    this.theme = this.getAttribute("code-block:theme") || "light";
  }

  connectedCallback() {
    super.connectedCallback();
    this.highlightSyntax(); // Highlight syntax when the element is connected to the DOM
    Copy.toClipboard(); // Enable copy functionality
    // Insert the copied text message
    this.insertCopiedText();
  }

  highlightSyntax() {
    if (this.lang) {
      const codeElement = this.querySelector(".code-block__code");
      if (codeElement) {
        hljs.highlightBlock(codeElement); // Highlight the code block
      }
    }
  }

  insertCopiedText() {
    const copyButton = this.querySelector("[copy-clipboard=trigger]");
    if (copyButton) {
        copyButton.addEventListener("click", () => {
            const copiedText = document.createElement("p");
            copiedText.textContent = "Copied";
            copiedText.classList.add("code-block__copied");
            copyButton.appendChild(copiedText).classList.add("code-block__copy-alert");

            setTimeout(() => {
                copiedText.remove();
            }, 2000);
        });
    } else {
        console.error("Copy button not found.");
    }
}


  getHeader() {
    return `
    ${
      this.hasHeader === true && this.hasCopyButton === true
        ? `
        <header class="code-block__header">
            ${
              this.hasHeader === true
                ? `
                  <div class="code-block__header__column">
                      <section class="code-block__title">${this.title}</section>
                      <badge-element
                      badge-element:border-radius="xs"
                      badge-element:padding="sm"
                      badge-element:font-family="mono"
                      badge-element:color="${this.theme}"
                      class="code-block__lang">.${this.lang}</badge-element>
                  </div>
                  `
                : ``
            }
            ${
              this.hasCopyButton === true
                ? `
                  <section class="code-block__header__column code-block__copy">
                      <button copy-clipboard="trigger">
                        ${Icon.clipboard}
                      </button>
                  </section>
                  `
                : ``
            }
        </header>`
        : ``
    }
    `;
  }

  render() {
    this.innerHTML = `  
            <section class="code-block code-block--${this.appearance}">
                ${this.getHeader()}
                <pre class="code-block__pre"><code class="code-block__code ${this.classNames}" copy-clipboard="target">${Cpx.String.trimWhitespace(this.initialContent)}</code></pre>
            </section>
        `;
  }
}
customElements.define(`code-block`, CpxCodeBlock);
