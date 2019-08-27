window.onload = function () {
        $('.firstnav-ul>li>a').click(function (e) {
                var href = window.location.hash;
                var hash = $(this).attr('href');
                console.log(e, href)
                $(this).addClass("active");

                $(this).parent().siblings().children().removeClass('active');

        });
        $('.secondul>li>a').click(function (e) {
                $(this).addClass("active");
                $(this).parent().siblings().children().removeClass('active');

        });
        $('.threeul>li>a').click(function (e) {
                $(this).addClass("active");
                $(this).parent().siblings().children().removeClass('active');

        });
        $('.fourul>li>a').click(function (e) {
                $(this).addClass("active");
                $(this).parent().siblings().children().removeClass('active');

        });
        $('.main').mouseover(function () {
                console.log('show')
                $('#m-carousel-prev').show();
                $('#m-carousel-next').show();
        });
        $('.main').mouseout(function () {
                console.log('hide')
                $('#m-carousel-prev').hide();
                $('#m-carousel-next').hide();
        });
        $("#carouselContainer a.left").click(function () {
                $("#demo").carousel("prev");
        });
        $("#demo a.right").click(function () {
                $("#carouselContainer").carousel("next");
        });
        $('#m-carousel-prev').click(function(){
                var active=$('.carousel-inner .carousel-item.active');
                active.siblings().addClass('active');
                active.removeClass('active');
        });
        $('#m-carousel-next').click(function(){
                var active=$('.carousel-inner .carousel-item.active');
                active.siblings().addClass('active');
                active.removeClass('active');
        });
        $('.dds').mouseover(function(){
                console.log('1')
                $('.m-modle').show();
        })
        $('.dds').mouseover(function(){
                $('.m-modle').hide();
        })

}