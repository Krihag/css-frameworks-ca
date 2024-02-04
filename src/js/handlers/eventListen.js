export default {
  /**
   * Module for creating event listeners.
   * @module eventListen
   */

  /**
   * Creates a form event listener.
   * @function form
   * @param {HTMLElement} element - The form element.
   * @param {function} callback - The callback function.
   */
  form: function (element, request) {
    element.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(element);
      const formData = new FormData(element);
      const body = Object.fromEntries(formData.entries());
      await request(body);
      element.reset();
    });
  },

  /**
   * Creates a click event listener.
   * @function click
   * @param {HTMLElement} element - The element to attach the click event listener to.
   * @param {function} callback - The callback function.
   */
  click: function (element, request) {
    element.addEventListener("click", async (e) => {
      await request(e);
    });
  },
};
