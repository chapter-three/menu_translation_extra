// We define a function that takes one parameter named $.
(function ($) {
  Drupal.behaviors.hideMenuItemRows = {
    attach: function (context, settings) {
      $(document).ready(function(){;
        $('#no_menu_items_to_display').hide();
        $('#menu-overview tbody tr.menu-enabled').hide();
        if ($('#menu-overview-form-language-selector').val() == 'all') {
          $('#menu-overview tr').show();
        }
        else {
          $('.lang-' + $('#menu-overview-form-language-selector').val()).show();
        }
        if($('#menu-overview tr.menu-enabled').children(':visible').length == 0) {
          $('#no_menu_items_to_display').show();
          $('#menu-overview thead tr').hide();
        }
      });
      $('#menu-overview-form-language-selector').change(function(){;
        $('#menu-overview tr.menu-enabled').hide();
        if ($(this).val() == 'all') {
          $('#menu-overview tr').show();
        }
        else {
          $('.lang-' + $(this).val()).show();
        }
        if ($('#menu-overview tr.menu-enabled').children(':visible').length == 0) {
          $('#no_menu_items_to_display').show();
          $('#menu-overview thead tr').hide();
        }
        else {
          $('#no_menu_items_to_display').hide();
          $('#menu-overview thead tr').show();
        }
      });
    }
  };
}(jQuery));