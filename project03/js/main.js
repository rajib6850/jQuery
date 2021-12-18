$(document).ready(function() {


    $('.tab-container .tab-content .tab-item:first').show()
    $('.tab-container .tab-heading ul li:first').addClass('active')


    $('.tab-heading ul li').click(function() {

        var liNumber = $(this).index()

        $('.tab-container .tab-heading ul li').removeClass('active')
        $(this).addClass('active')
        $('.tab-content .tab-item').hide()
        $('.tab-content .tab-item').eq(liNumber).show()

    })



});