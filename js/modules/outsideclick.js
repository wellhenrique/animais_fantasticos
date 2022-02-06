export default function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    [("toutchstart", "click")].forEach((eventUser) => {
      html.addEventListener(eventUser, handleOutsideClick);
      element.setAttribute(outside, "");
    });
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      [("toutchstart", "click")].forEach((eventUser) => {
        html.removeEventListener(eventUser, handleOutsideClick);
      });
      callback();
    }
  }
}
