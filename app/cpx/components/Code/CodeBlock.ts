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
hljs.registerLanguage("shell", bash); // Register Shell language

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
      const codeElement = this.querySelector("[hljs-area]");
      if (codeElement) {
        hljs.highlightElement(codeElement); // Highlight the code block
      }
    }
  }

  insertCopiedText() {
    const copyButton = this.querySelector("[copy-clipboard=trigger]");
    if (copyButton) {
        copyButton.addEventListener("click", () => {
            const copiedText = document.createElement("p");
            copiedText.textContent = "Copied";
            copiedText.classList.add("");
            copyButton.appendChild(copiedText).classList.add("");

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
        <header class="p:4 w:full display:flex gap:4 justify-content:between align-items:center border-b-width:1 border-color:gray-400">
            ${
              this.hasHeader === true
                ? `
                  <div class="display:flex gap:4 align-items:center">
                      <section class="size:md weigth:semibold">${this.title}</section>
                      <badge-element
                      badge-element:border-radius="xs"
                      badge-element:padding="sm"
                      badge-element:font-family="mono"
                      badge-element:color="${this.theme}"
                      class="">.${this.lang}</badge-element>
                  </div>
                  `
                : ``
            }
            ${
              this.hasCopyButton === true
                ? `
                  <section class="">
                      <button class="w:6 h:6" copy-clipboard="trigger">
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
            <section class="bg:gray-300 color:gray-900 border-radius:md radius:md overflow:hidden ${this.classNames}">
                ${this.getHeader()}
                <pre class="p:4"><code class="font-family:mono language-${this.lang}" copy-clipboard="target" hljs-area>${Cpx.String.trimWhitespace(this.initialContent)}</code></pre>
            </section>
        `;
  }
}
customElements.define(`code-block`, CpxCodeBlock);
