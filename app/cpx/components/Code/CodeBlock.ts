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
import css from "highlight.js/lib/languages/css";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import java from "highlight.js/lib/languages/java";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("php", php);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("c", c);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("java", java);
hljs.registerLanguage("typescript", typescript);


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
        <header class="p:4 w:full display:flex gap:4 content:between items:center border-b-width:1 border-color:gray-400">
            ${
              this.hasHeader === true
                ? ` 
                  <div class="display:flex gap:4 color:black items:center">
                      <section class="size:md weigth:semibold leading:2">${this.title}</section>
                      <badge-element
                      badge-element:radius="sm"
                      badge-element:padding="1"
                      badge-element:size="xs"
                      badge-element:font-family="mono"
                      badge-element:color="gray-dark-800"
                      badge-element:border-color="gray-900"
                      badge-element:bg="${this.theme}"
                      class="">.${this.lang}</badge-element>
                  </div>
                  `
                : ``
            }
            ${
              this.hasCopyButton === true
                ? `
                  <section class="">
                      <button class="w:5 h:5" copy-clipboard="trigger">
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
