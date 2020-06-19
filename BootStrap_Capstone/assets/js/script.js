$(function () {
    $(document).scroll(function () {
         var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });

    $('#joinButton').click(function() {
        $('#joinModal').modal('show');
    });
});