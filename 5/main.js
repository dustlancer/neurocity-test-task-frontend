const toggleButton = document.getElementById('toggleButton');
const elements = document.querySelectorAll('.element');



function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const toggleVisibility = debounce(function(show) {
  elements.forEach(element => {
    if (show) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}, 1000);

let isOpen = false;

toggleButton.addEventListener('click', function(e) {
  isOpen = !isOpen;
  e.target.textContent = isOpen ? 'Закрыть' : 'Открыть';
  toggleVisibility(isOpen);
});