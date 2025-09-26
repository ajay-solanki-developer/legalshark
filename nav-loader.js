fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('mainNav').innerHTML = html;
  })
  .catch(err => console.error('Navigation load failed:', err));
