let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);



$('.js-form-validate').submit(function () {
   var form = $(this);
   var field = [];
   form.find('input[data-validate]').each(function () {
      field.push('input[data-validate]');
      var value = $(this).val(),
         line = $(this).closest('.js-field');
      for (var i = 0; i < field.length; i++) {
         if (!value) {
            line.addClass('js-field-required');
            setTimeout(function () {
               line.removeClass('js-field-required')
            }.bind(this), 2000);
            event.preventDefault();
         }
      }
   });
});