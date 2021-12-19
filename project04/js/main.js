$(document).ready(function() {




    $('#search-box').on('keyup', function() {

        var inputVal = $(this).val().toLowerCase();
        $('.content ul li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputVal) > -1)
        })

    })




});