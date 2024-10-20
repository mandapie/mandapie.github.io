document.addEventListener("DOMContentLoaded", function () {
  initializeModal();
});

function initializeModal() {
  const contactModal = document.getElementById('contact');
  const contactInput = document.querySelectorAll('input')[0];
  const sendBtn = document.getElementById('send-btn');

  contactModal.addEventListener('shown.bs.modal', () => {
    contactInput.focus();
  });

  contactModal.addEventListener('hidden.bs.modal', () => {
    clearInputs();
  });

  sendBtn.addEventListener('click', () => {
    clearInputs();
  });
}

function clearInputs() {
  const contactInputs = document.querySelectorAll('input');
  const contactTextarea = document.querySelectorAll('textarea');

  contactInputs.forEach(el => {
    el.value = "";
  });

  contactTextarea.forEach(el => {
    el.value = "";
  });
}