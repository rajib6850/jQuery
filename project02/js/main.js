jQuery(document).ready(function() {






    $('.menuIcon').click(function() {

        $('.sidebarNav').toggleClass('menuActive');

        if (jQuery('.sidebarNav').hasClass('menuActive')) {

            jQuery('.menuActive').children('.leftMenu').children('.menuIcon').css({ 'right': '0', 'top': '0', 'left': 'inherit' })
            jQuery('.menuActive').children('.leftMenu').children('.menuIcon').addClass('iconChange')


        } else {
            jQuery('.leftMenu').children('.menuIcon').css({ 'right': 'inherit', 'left': '0' })
            jQuery('.sidebarNav').children('.leftMenu').children('.menuIcon').removeClass('iconChange')

        }
        return false;
    });














})