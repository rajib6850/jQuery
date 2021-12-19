$(document).ready(function() {


    $(window).scroll(function() {


        var headerHight = $('.header').outerHeight(true)

        var topSc = $(window).scrollTop()

        if (topSc > headerHight) {
            $('.header').css({ 'position': 'fixed', 'top': '0' })
        } else {

            if(topSc < headerHight){
                $('.header').css({ 'position': 'absolute', 'top': '0' })
            }

            
        }




    })

});



// Jodi window oticrom kore menu height ... then menu is styky