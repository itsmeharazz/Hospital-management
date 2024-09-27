// $('#recipeCarousel').carousel({
//      interval: 10000
//    })
   
//    $('.carousel .carousel-item').each(function(){
//        var minPerSlide = 3;
//        var next = $(this).next();
//        if (!next.length) {
//        next = $(this).siblings(':first');
//        }
//        next.children(':first-child').clone().appendTo($(this));
       
//        for (var i=0;i<minPerSlide;i++) {
//            next=next.next();
//            if (!next.length) {
//                 next = $(this).siblings(':first');
//               }
           
//            next.children(':first-child').clone().appendTo($(this));
//          }
//    });
   
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})