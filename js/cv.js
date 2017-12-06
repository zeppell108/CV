$(function() {

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
        });
        $('.' + show).each(function () {
            $(this).removeAttr('style');
        });
    });
});