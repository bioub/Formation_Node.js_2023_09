// Module IIFE
// Immediately Invoked Function Expression
(function(global, Horloge) {
  'use strict';

  const divElt = document.querySelector('.horloge');
  const clock = new Horloge(divElt);
  clock.start();

}(window, Horloge));
