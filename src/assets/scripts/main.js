/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario");
  const modalExito = new bootstrap.Modal(document.getElementById("modal-exito-formulario"));
  const modalError = new bootstrap.Modal(document.getElementById("modal-error-formulario"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      modalExito.show();
      form.reset();

    } catch (error) {
      modalError.show();
    }
  })
})
