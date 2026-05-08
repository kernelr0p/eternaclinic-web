document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    var item = this.closest('.faq-item');
    var wasOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-item.open').forEach(function(el) { el.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  });
});
