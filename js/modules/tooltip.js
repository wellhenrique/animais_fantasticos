export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver() {
    const tooltip = createTooltipBox(this);

    onMouseMove.tooltip = tooltip;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltip = tooltip;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltip.style.top = event.pageY + 20 + "px";
      this.tooltip.style.left = event.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function createTooltipBox(element) {
    const tooltip = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltip.classList.add("tooltip");
    tooltip.innerText = text;
    document.body.appendChild(tooltip);

    return tooltip;
  }
}
initTooltip();
