$(document).ready(() => {
  $('#text').on('keyup', (event)  => {
    $('.preview').html($(event.currentTarget).val())
  });
  
  $('#font').on('change', (event) => {
    $('.preview').css('font-family', event.target.value)
  });

  $('#weight').on('change', (event) => {
    $('.preview').css('font-weight', event.target.value)
  });

  $('#size').on('keyup', (event) => {
    let fontSize = event.target.value + 'px'
    $('.preview').css('font-size', fontSize)
  });
})
