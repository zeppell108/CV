$(function() {


    $('input').on("click", function () {

        var cls;
        var gb = "gb";
        var pl = "pl";
        if (this.id == gb) {
            $('.pl').each(function () {

                $(this).css('display', 'none');
            });
            $('.gb').each(function () {

                $(this).removeAttr('style');
            });
        }
        else {
            $('.gb').each(function () {

                $(this).css('display', 'none');
            });
            $('.pl').each(function () {

                $(this).removeAttr('style');
            });
        }



        // alert('id: ' + id);

    });
});