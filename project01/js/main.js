jQuery(document).ready(function() {


    // <i class="fas fa-plus" style="float:right;"></i>

    $('.accordion-header h3').append('<i class="fas fa-plus" style="float:right;"></i>')

    if (jQuery('.accordion-header').next('.accordion-body').hasClass('active')) {
        jQuery('.active').css({ 'display': 'block' })
        $('.active').siblings('.accordion-header').children('h3').children('i').removeClass('fa-plus').addClass('fa-minus')

    }
    jQuery('.accordion-header').click(function() {
        if (jQuery(this).next('.accordion-body').hasClass('active')) {

            jQuery(this).next('.accordion-body').slideUp().removeClass('active')
            $(this).children('h3').children('i').removeClass('fa-minus').addClass('fa-plus')
        } else {
            $('.accordion').find('.active').slideUp().removeClass('active');
            $('.accordion').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
            jQuery(this).next('.accordion-body').slideDown().addClass('active')
            $('.active').siblings('.accordion-header').children('h3').children('i').removeClass('fa-plus').addClass('fa-minus')
        }
    });




})