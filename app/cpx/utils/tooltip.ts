export const Tooltip = (
  //
  tooltipSelector: string = "tool-tip",
  appendTo: string = "body"
) => {
  const tooltipElements = document.querySelectorAll(`${tooltipSelector}`);
  const tooltipPrefix = tooltipSelector.replace("[", "").replace("]", "");
  const appendContainer = document.querySelector(appendTo);
  console.log("Tooltip API", tooltipElements);

  // Create a single tooltip content element outside of the loop
  const tooltipDiv = document.createElement("div");
  tooltipDiv.style.display = "none";
  tooltipDiv.style.zIndex = "-1";
  tooltipDiv.classList.add(`bg:light-300`);
  tooltipDiv.classList.add(`border-width:1`);
  tooltipDiv.classList.add(`px:2`);
  tooltipDiv.classList.add(`py:1`);
  tooltipDiv.classList.add(`border-color:light-500`);
  tooltipDiv.classList.add(`radius:sm`);
  tooltipDiv.classList.add(`color:dark-900`);
  tooltipDiv.style.fontSize = `80%`;
  tooltipDiv.style.position = "absolute";
  tooltipDiv.style.zIndex = "9999";
  // @ts-ignore
  appendContainer.appendChild(tooltipDiv);
  console.log(appendContainer, tooltipDiv);

  // Set up event listeners for show/hide on the single tooltip content element
  tooltipElements.forEach((element: any, index: number) => {
    console.log(element, index);
    const tooltipContent = element.getAttribute(`${tooltipPrefix}:content`);
    const tooltipId = "tooltip-" + index;
    element.style.cursor = "pointer";
    console.log("Tooltip Content", tooltipContent);
    console.log("Tooltip ID", tooltipId);

    // Calculate and set the correct left/top position for each tooltip content div
    const positions = calculateAndShowTooltipPosition(element, tooltipContent, true);
    if (positions) {
      const { leftPosition, topPosition } = positions;
      console.log("Tooltip Position", leftPosition, topPosition);
      tooltipDiv.style.left = leftPosition + "px";
      tooltipDiv.style.top = topPosition + "px";
    }

    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:bg`) || "bg:light-300");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:border-color`) || "border-color:light-500");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:border-width`) || "border-width:1");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:color`) || "color:dark-900");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:bg`) || "color:dark-900");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:radius`) || "radius:sm");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:padding:x`) || "px:2");
    tooltipDiv.classList.add(element.getAttribute(`${tooltipPrefix}:content:padding:y`) || "py:1");


    // Style the Tooltip Toggle Element
    element.style.borderBottom = element.getAttribute(`${tooltipPrefix}:border-bottom`) || "var(--px) dotted var(--dark-100)";
    element.style.backgroundColor = element.getAttribute(`${tooltipSelector}:bg`) || "transparent";
    element.style.color = element.getAttribute(`${tooltipPrefix}:color`) || "inherit";
    element.setAttribute("tabindex", "1");
    element.setAttribute("aria-describedby", tooltipId);

    // Set up event listeners for show/hide on each tooltip element
    element.addEventListener("load", () => {
      calculateAndShowTooltipPosition(element, tooltipContent, false, true);
      hideTooltip();
    });

    element.addEventListener("mouseout", () => {
      hideTooltip();
    });

    element.addEventListener("click", () => {
      calculateAndShowTooltipPosition(element, tooltipContent);
    });

    element.addEventListener("blur", () => {
      hideTooltip();
    });

    element.addEventListener("focus", () => {
      calculateAndShowTooltipPosition(element, tooltipContent);
    });

    // Modify the event listener to handle mouseover event for more precise tooltip positioning
    element.addEventListener("mouseover", () => {
      calculateAndShowTooltipPosition(element, tooltipContent);
    });
  });

  /**
   * Calculate the position of the tooltip content element and show it.
   * @param element The tooltip element that triggered the tooltip.
   * @param content The content of the tooltip.
   * @param returnVar If true, returns the calculated left and top positions.
   */
  function calculateAndShowTooltipPosition(element: any, content: string, returnVar: boolean = false, calcOnly: boolean = false) {
    const rect = element.getBoundingClientRect();
    const tooltipOffsetY = parseInt(element.getAttribute(`${tooltipPrefix}:offset:y`)) || 0;
    const tooltipOffsetX = parseInt(element.getAttribute(`${tooltipPrefix}:offset:x`)) || 0;
    const tooltipAnchor = element.getAttribute(`${tooltipPrefix}:anchor`) || "top";

    let leftPosition = rect.left + window.scrollX + element.offsetWidth / 2 - tooltipDiv.offsetWidth / 2 - tooltipOffsetX;
    let topPosition;

    if (tooltipAnchor === "bottom") {
      topPosition = rect.bottom + window.scrollY + tooltipOffsetY;
    } else {
      topPosition = rect.top + window.scrollY - tooltipDiv.offsetHeight - tooltipOffsetY;
    }

    /*
     * Check if the tooltip is going out of the viewport and adjust its position
     */
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    /*
     * Adjust horizontal position
     */
    if (leftPosition < 0) {
      leftPosition = 0; // Align left edge with viewport
    } else if (leftPosition + tooltipDiv.offsetWidth > viewportWidth) {
      leftPosition = viewportWidth - tooltipDiv.offsetWidth; // Align right edge with viewport
    }

    // Adjust vertical position
    if (topPosition < 0) {
      topPosition = rect.bottom + window.scrollY + tooltipOffsetY; // Move to below the element
    } else if (topPosition + tooltipDiv.offsetHeight > viewportHeight) {
      topPosition = rect.top + window.scrollY - tooltipDiv.offsetHeight - tooltipOffsetY; // Move to above the element
    }

    if (returnVar) {
      return {
        leftPosition,
        topPosition,
      };
    }

    // Apply the calculated positions
    tooltipDiv.textContent = content;
    tooltipDiv.style.left = leftPosition + "px";
    tooltipDiv.style.top = topPosition + "px";
    tooltipDiv.style.position = "absolute";
    if (!calcOnly) {
      tooltipDiv.style.display = "block";
      tooltipDiv.style.zIndex = "9999";
      tooltipDiv.setAttribute("aria-hidden", "false");
    }
  }

  /**
   * Hide the tooltip content element.
   */
  function hideTooltip() {
    tooltipDiv.style.display = "none";
    tooltipDiv.setAttribute("aria-hidden", "true");
    tooltipDiv.style.zIndex = "-1";
  }
};
