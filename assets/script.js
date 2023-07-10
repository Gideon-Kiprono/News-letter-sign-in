const form = document.querySelector('form')
card_1 = document.getElementById('card-1')
card_2 = document.getElementById("sucess-desktop-modal");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  card_1.classlist.add('hide')
  // Card_2.classlist.remove('hide')
})

