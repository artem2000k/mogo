var accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function(item) {
  var header = item.querySelector('.accordion__header');
  var content = item.querySelector('.accordion__content');

  header.addEventListener('click', function() {
    if (item.classList.contains('active')) {
      content.style.display = 'none';
      item.classList.remove('active');
    } else {
      // закрыть
      closeAllAccordionItems();

      // открыть
      content.style.display = 'block';
      item.classList.add('active');
    }
  });
});

function closeAllAccordionItems() {
  accordionItems.forEach(function(item) {
    var content = item.querySelector('.accordion__content');
    content.style.display = 'none';
    item.classList.remove('active');
  });
}