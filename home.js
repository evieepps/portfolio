document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn');
    var items = document.querySelectorAll('.items');
    var nav = document.querySelector('nav ul');

    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        items.forEach(function(item) {
          item.classList.toggle('show');
        });
        nav.classList.toggle('show');
      });
    });

    const backToTopBtn = document.getElementById('back-to-top-btn');
    backToTopBtn.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const goToCSBtn = document.getElementById('go-to-cs-btn');
    goToCSBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const box4 = document.querySelector('.box4');
      const box4Position = box4.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: box4Position, behavior: 'smooth' });
    });
  });