// script.js
function showDetails(projectName) {
  alert(`More details about ${projectName} coming soon!`);
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
});
