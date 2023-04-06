// Sticky navigation


let navbar = $('.navbar')
$(window).scrollTop( function(){
    let oTop = $('.section-2').offset().top - window.innerHeight
    if($(window.screenTop())> oTop){
        navbar.addClass('sticky');
    }
    else{
        navbar.removeClass('stick');
    }

})