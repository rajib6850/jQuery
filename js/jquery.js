$(document).ready(function() {



    $('ul ul').siblings('a').append(' <i class="fas fa-angle-down"></i>')




    $("li a").click(function() {



        if ($(this).siblings().is('ul')) {
            $(this).siblings('ul').fadeToggle()
            return false
        } else {
            return true
        }


    });


    $('li a').click(function() {

        if ($(this).siblings().is('.slide')) {
            $(this).siblings('.slide').slideToggle();
            return false;
        } else {
            return true;
        }

    })


    $('.start').click(function() {
        $('.box').slideToggle(5000);
    })

    $('.stop').click(function() {
        $('.box').stop(false);
    })

    $('.add-css').click(function() {
        $('.add_css').css('font-size', '30px').fadeUp(5000);
    })

    $('.text').text('This text set using by jQuery').css('margin', "20px");

    var getText = $('.text').text();
    $('.setText').text(getText).css({ 'font-size': '30px', 'padding': '20px' })


    //  Get HTML Element 

    var getHtmlElement = $('.add_css').text();

    $('.show_text').click(function() {


        var gettxt = $('#text').text();

        alert(gettxt);


    })

    $('.show_html').click(function() {
        var getHtmlTag = $('#text').html();
        alert(getHtmlTag);
    })


    $('input[type="email"]').attr('placeholder', 'Enter Your E-mail')
    $('input[type="password"]').attr('placeholder', 'Enter Your Password')




    $('input[type="submit"]').click(function() {
        alert("E-mail : " + $('input[type="email"]').val());
        alert("Password : " + $('input[type="password"]').val());
    })

    // Append & Prepend



    $('.appendText').click(function() {
        $('.append').append('<b> append text </b>')
    })

    $('.prependText').click(function() {
        $('.append').prepend('<b> Prepend text </b>')
    })


    $('.appendItem').click(function() {

        $('.appOrderList').append('<li> <b> Append item </b>')

    })

    $('.prependItem').click(function() {
        $('.appOrderList').prepend('<li> <b> Prepend item <b></li>')
    })


    $('.before').click(function() {

        var img = $('.img').html()
        $('.insertImg').before(img)

    })

    $('.after').click(function() {
        var img = $('.img').html()
        $('.insertImg').after(img)
    })

    $('.remove').click(function() {
        $('.rebox').remove();
    })
    $('.empty').click(function() {
        $('.rebox').empty();
    })

    $('.addClass').click(function() {
        $('.arclass').addClass('red')
        return false
    })

    $('.removeClass').click(function() {
        $('.arclass').removeClass('red')
    })

    $('.colorPicker').blur(function() {
        var colorPicked = $('.colorPicker').val()
        $('.arclass').css('background-color', colorPicked)
    })

    $('.toggleClass').click(function() {
        $('.arclass').toggleClass('green')
    })

    var boxModelWidth = $('.boxmodel').width()
    var boxModelHight = $('.boxmodel').height()
    var boxModelInnerWidth = $('.boxmodel').innerWidth()
    var boxModelInnerHeight = $('.boxmodel').innerHeight()
    var boxModelOuterWidth = $('.boxmodel').outerWidth(true)
    var boxModelOuterHeight = $('.boxmodel').outerHeight(true)


    $('.boxmodel').html('<p> Box Width = ' + boxModelWidth + '</p>')
    $('.boxmodel p').after('<p>Box Height = ' + boxModelHight + '</p>')
    $('.boxmodel p:nth-child(2)').after('<p> InnerWidth = ' + boxModelInnerWidth + '</p>')
    $('.boxmodel p:nth-child(3)').after('<p>InnerHeight = ' + boxModelInnerHeight + '</p>')
    $('.boxmodel p:nth-child(4)').after('<p>OuterWidth = ' + boxModelOuterWidth + '</p>') +
        $('.boxmodel p:nth-child(5)').after('<p>OuterHeight = ' + boxModelOuterHeight + '</p>')


    // children = ============

    $('.parent').children('a').css({ 'color': 'red', 'font-size': '26px' })
    $('.parent').parents('body').addClass('rajib')











    // End Jquery =============

});