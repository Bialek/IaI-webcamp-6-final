function showHideFooterLinks(child) {
    if ($(document).width() > 757)
        return;
    // $('.IsBestAnswer').addClass('bestanswer').removeClass('IsBestAnswer');
    var menu = $(child).parent().find('div');
    if (menu.css('display') === "none") {
        menu.css('display', 'flex');
        $(child).find('.fontello-icon').css('transform', 'rotate(-90deg)')
    } else {
        menu.css('display', 'none');
        $(child).find('.fontello-icon').css('transform', 'rotate(90deg)')
    }
}