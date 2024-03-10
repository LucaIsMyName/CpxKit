import { CpxElement } from "../../element";
import { Cpx } from "../../index";
import * as marked from "marked";

// Log the behavior of marked

export class CpxParseMarkdown extends CpxElement {
  classNames: string;
  sourceUrl: string;
  hasBaseStyles: any;

  constructor() {
    super();
    this.classNames = this.getAttribute("parse-markdown:class") || "";
    this.sourceUrl = this.getAttribute("parse-markdown:url") || "";
    this.hasBaseStyles = this.getAttribute("parse-markdown:styles") || false;
  }

  connectedCallback(): void {
    this.render();
  }

  render() {
    const evalBaseStyles = eval(this.hasBaseStyles);
    // Check if sourceUrl is provided
    if (!this.sourceUrl) {
      console.error("No source URL provided for Markdown content.");
      return;
    }
    
    /**
     * @description
     * Fetch the Markdown content from the source URL
     * and parse it using marked
     * @returns {void}
     */
    fetch(this.sourceUrl)
      .then((response) => response.text())
      .then((markdownContent) => {
        // Parse the Markdown content using marked
        this.innerHTML = `
          <div class="parse-markdown parse-markdown--styles-${evalBaseStyles.toString()} ${this.classNames}">
            ${marked.parse(markdownContent)}
          </div>
        `;
      })
      .catch((error) => {
        console.error("Error fetching Markdown content:", error);
      });
  }
}

customElements.define(`parse-markdown`, CpxParseMarkdown);
