document.addEventListener("DOMContentLoaded", function () {
  toggleButton();
});

function toggleButton() {
  const button = document.getElementById('see-more-btn');
  button.addEventListener('click', () => {
    button.style.display = 'none';
  });
}