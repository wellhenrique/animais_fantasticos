export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((eventUser) => {
        html.removeEventListener(eventUser, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((eventUser) => {
      setTimeout(() => {
        html.addEventListener(eventUser, handleOutsideClick);
      });
      element.setAttribute(outside, "");
    });
  }
}
