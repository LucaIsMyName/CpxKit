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
  lang: string;
  title: string;
  hasCopyButton: boolean;
  hasHeader: boolean;
  borderRadius: string;
  borderWidth: number;
  color: string;
  bgColor: string;
  borderColor: string;
  padding: number;

  constructor() {
    super();
    this.ID = this.getAttribute("component:id") || Cpx.Id.Generate.hex(6).replace(" ", "");
    this.classNames = this.getAttribute("code-block:class") || "";
    this.title = this.getAttribute("code-block:title") || "Code";
    this.lang = this.getAttribute("code-block:lang") || "js";
    this.hasCopyButton = eval(this.getAttribute("code-block:has-copy-button")) || true;
    this.hasHeader = eval(this.getAttribute("code-block:has-header")) || true;
    this.borderRadius = this.getAttribute("code-block:radius") || "sm";
    this.borderWidth = parseInt(this.getAttribute("code-block:border-width")) || 1;
    this.color = this.getAttribute("code-block:color") || "text-500";
    this.bgColor = this.getAttribute("code-block:bg") || "shade-xxs";
    this.borderColor = this.getAttribute("code-block:border-color") || "shade-xl";
    this.padding = parseInt(this.getAttribute("code-block:padding")) || 4;
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
        <header class=" w:full display:flex gap:4 content:between items:center border-b-width:1 border-color:${this.borderColor} pb:4">
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
                      badge-element:color="dark-300"
                      badge-element:border-color="light-900"
                      badge-element:bg=transparent
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
            <section class="
              ${this.padding !== 0 ? `p:${this.padding}` : ""}
              ${this.color !== "transparent" ? `color:${this.color}` : ""}
              ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
              ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
              ${this.borderRadius !== "none" ? `radius:${this.borderRadius}` : ""}
              ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}

              overflow:hidden
              ${this.classNames}">
                ${this.getHeader()}
                <pre class="mt:4"><code class="font-family:mono language-${this.lang}" copy-clipboard="target" hljs-area>${Cpx.String.trimWhitespace(this.initialContent)}</code></pre>
            </section>
        `;
  }
}
customElements.define(`code-block`, CpxCodeBlock);
