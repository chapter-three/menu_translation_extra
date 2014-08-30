// We define a function that takes one parameter named $.
(function ($) {
  Drupal.behaviors.hideMenuItemRows = {
    attach: function (context, settings) {
      $(document).ready(function(){;
        $('#no_menu_items_to_display').hide();
        $('#menu-overview tr').hide();
        if ($('#menu-overview-form-language-selector').val() == 'all') {
          $('#menu-overview tr').show();
        }
        else {
          $('.lang-' + $('#menu-overview-form-language-selector').val()).show();
        }
        if($('#menu-overview tr').children(':visible').length == 0) {
          $('#no_menu_items_to_display').show();
        }
      });
      $('#menu-overview-form-language-selector').change(function(){;
        $('#menu-overview tr').hide();
        if ($(this).val() == 'all') {
          $('#menu-overview tr').show();
        }
        else {
          $('.lang-' + $(this).val()).show();
        }
        if ($('#menu-overview tr').children(':visible').length == 0) {
          $('#no_menu_items_to_display').show();
        }
        else {
          $('#no_menu_items_to_display').hide();
        }
      });
    }
  };
}(jQuery));