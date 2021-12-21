export default function initTooTip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const toolTipBox = criarToltipBox(this);
    toolTipBox.style.top = event.screenY + "px";
    toolTipBox.style.left = event.pageX + "px";

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.screenY + "px";
      this.toolTipBox.style.left = event.pageX + "px";
    },
  };

  const criarToltipBox = (element) => {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerHTML = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  };
}
