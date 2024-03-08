interface Copy {
  toElement: (trigger?: string, button?: string, targetAreaId?: string, fromAreaSelector?: string) => void;
  toClipboard: (trigger?: string, triggerElement?: string, targetElement?: string) => void;
}

export const Copy = {
  /**
   * @name toElement
   * @param elementId
   * @returns
   * @description
   * this function copies
   */

  toElement: (trigger: string = "click", button: string = '[copy-element="trigger"]', targetAreaId: string = '[copy-element="target"]', fromAreaSelector: string = '[copy-element="origin"]') => {
    const targetArea = document.querySelector(targetAreaId);
    const copyButton = document.querySelector(button);
    const fromArea = document.querySelector(fromAreaSelector);

    if (copyButton) {
      copyButton.addEventListener(trigger, (event) => {
        // Prevent default form submission behavior if trigger is "submit"
        if (trigger === "submit") {
          event.preventDefault();
        }

        if (!targetArea) {
          console.error(`Target area with ID '${targetAreaId}' not found.`);
          return;
        }

        const fromArea = document.querySelector(fromAreaSelector);
        if (!fromArea) {
          console.error(`Source area with selector '${fromAreaSelector}' not found.`);
          return;
        }

        targetArea.innerHTML = fromArea.innerHTML; // Use .value to get input value
        console.log("Content copied to target area.");
      });
    } else {
      console.error("Copy button not found.");
    }
  },
  /**
   * @name toClipboard
   * @param targetElement
   * @description
   * This function copies the content of an element to the clipboard when the element is clicked.
   * @example
   * <div data-copy-area="copy-me">Copy me</div>
   * <button data-copy-trigger="copy-me">Copy</button>
   */
  toClipboard: (trigger: string = "click", triggerAttribute: string = "copy-clipboard=trigger", targetElementAttribute: string = "copy-clipboard=target") => {
    // Define the copy function separately
    const copyToClipboard = (): any => {
      // Select the element to be copied
      const copyElement = document.querySelector(`[${targetElementAttribute}]`);
      if (!copyElement) return; // Abort if element not found

      // Create a range to select the element's content
      const range = document.createRange();
      range.selectNode(copyElement);

      // Clear any existing selection and select the element's content
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Copy the selected content to the clipboard
      document.execCommand("copy");

      // Clean up by deselecting the content
      window.getSelection().removeAllRanges();
    };

    // Listen for clicks on elements with data-copy-trigger attribute
    document.addEventListener(trigger, (event: any) => {
      const clickedElement = event.target;
      console.log("Clicked element:", clickedElement, "Trigger attribute:", triggerAttribute);
      if (clickedElement.hasAttribute(`${triggerAttribute}`)) {
        console.log("Copy button clicked");
        copyToClipboard(); // Call the copy function
        console.log("Copied to clipboard");
      } else {
        console.log("No copy button clicked");
      }
    });
  },
};
