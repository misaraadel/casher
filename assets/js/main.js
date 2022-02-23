$(document).ready(function () {
    $('#hidden-section').click(function(){
        $('.hidden-content').toggleClass('active-content');
    });

    $('.open-menu').click(function(){
        $('.menu-list').addClass('active-list');
    });
});