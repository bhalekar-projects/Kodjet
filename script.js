document.addEventListener("DOMContentLoaded", function () {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading navbar:', error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
});
