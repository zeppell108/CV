$(function() {

    // all dates center
    $('td:nth-child(4n)').css('text-align', 'center');

    // polish site after reload
    $('.gb').each(function () {
        $(this).css('display', 'none');
    });

    // change language of the site by clicking proper flag of country
    $('input').on("click", function () {

        var show;
        var hide;

        if (this.id == "gb") {
            show = "gb";
            hide = "pl";
        }
        else {
            show = "pl";
            hide = "gb";
        }
        $('.' + hide).each(function () {
            $(this).css('display', 'none');
            // $('.' + show).removeAttr('style');
        });
        $('.' + show).each(function () {
            $(this).removeAttr('style');
        });
    });
});