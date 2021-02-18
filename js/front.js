$(function () {
    // ================================================
    //  NAVBAR BEHAVIOR
    // ================================================
	
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
	$(document).ready(function () {
		$('header nav').meanmenu();
	});
 $(window).scroll(function(){
        if (this.scrollY>20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500){
            $('.scroll-up-button').addClass("show")
        }else{
            $('.scroll-up-button').removeClass("show")
        }
    });

    //slide up 
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop:0});
    });
    // ================================================
    // Preventing URL update on navigation link click
    // ================================================
    $('.link-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();

        $('.navbar-collapse.collapse').toggleClass('show');
    });


    // ================================================
    // Scroll Spy
    // ================================================
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

});
