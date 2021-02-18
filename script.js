$(document).ready(function(){
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

    // toggle menu /navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing animation 
    var typed= new Typed(".typing",{
        strings: ["Developer.","Programmer.","Tech Lover.","Software Engineer Student.",],
        typeSpeed : 100,
        backSpeed : 60 ,
        loop:true ,

    });
    var typed= new Typed(".typing2",{
        strings: ["Mazeen Aljane."],
        typeSpeed : 200,
        backSpeed : 60 ,
        loop:false ,

    });
    var typed= new Typed(".typing3",{
        strings: ["My name is Mazeen Aljane and I'm a Developer, Programmer and Currently Software Engineer Student."],
        typeSpeed : 100,
        backSpeed : 60 ,
        loop: false ,

    });
    
    //owl carousel 
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1 ,
                nav:false
            },
            600:{
                items:2 ,
                nav:false
            },
            1000:{
                items:3 ,
                nav:false
            }
        }
    })

    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = (()=>{
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    });
    loginBtn.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    });
    signupLink.onclick = (()=>{
      signupBtn.click();
      return false;
    });

});