document.getElementById('button1').addEventListener('click', function() {
  redirectTo('https://classroom.google.com');
});

document.getElementById('button2').addEventListener('click', function() {
  redirectTo('https://docs.google.com');
});

document.getElementById('button3').addEventListener('click', function() {
  redirectTo('https://slides.google.com');
});

document.getElementById('button4').addEventListener('click', function() {
  redirectTo('https://mail.google.com');
});

document.getElementById('button5').addEventListener('click', function() {
  redirectTo('https://drive.google.com');
});

function redirectTo(url) {
  window.location.href = url;
}

// Ensure the form submits on Enter key press
document.querySelector('.search-bar input[type="text"]').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    this.form.submit();
  }
});

// Clear the search bar text when the page loads
window.addEventListener('load', function() {
  const searchInput = document.querySelector('.search-bar input[type="text"]');
  searchInput.value = '';
});
