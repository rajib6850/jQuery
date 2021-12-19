$(document).ready(function() {


    $(window).scroll(function() {


        var headerHight = $('.header').outerHeight(true)

        var topSc = $(window).scrollTop()

        if (topSc > headerHight) {
            $('.header').css({ 'position': 'fixed', 'top': '0' })
        } else {
            $('.header').css('top', -headerHight)
        }




    })

});



// Jodi window oticrom kore menu height ... then menu is styky