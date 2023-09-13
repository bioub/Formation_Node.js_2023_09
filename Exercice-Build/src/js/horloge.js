(function(global) {
  'use strict';

  class Horloge {
    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container) {
      this._container = container;
    }

    _render() {
      const now = new Date();
      this._container.innerText = now.toLocaleTimeString();
    }

    start() {
      this._render();
      setInterval(this._render.bind(this), 1000);
    }
  }

  global.Horloge = Horloge;

}(window));
