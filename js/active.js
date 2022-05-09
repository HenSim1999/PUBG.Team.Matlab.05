$(document).ready(function() {
    $('.tabs-content-item').hide();
    $('.tabs-content-item:first-child').show();
    $('.nav-tabs li').click(function(){
        $('.tabs-content-item').hide();
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');
        let id_tabs_content = $(this).children('a').attr('href');
        $(id_tabs_content).show();
        return false;
    });
});