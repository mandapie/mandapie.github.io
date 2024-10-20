document.addEventListener("DOMContentLoaded", function () {
  initializeModal();
});

function initializeModal() {
  const contactModal = document.getElementById('contact');
  const contactInputs = document.querySelectorAll('input');
  const contactTextarea = document.querySelectorAll('textarea');

  contactModal.addEventListener('shown.bs.modal', () => {
    contactInputs[0].focus();
  });

  contactModal.addEventListener('hidden.bs.modal', () => {
    contactInputs.forEach(el => {
      el.value = "";
    });

    contactTextarea.forEach(el => {
      el.value = "";
    });
  });
}
