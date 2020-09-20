new WOW().init();
new SmoothScroll('a[href*="#"]');

$('#toggler').on('click' , function(){
    let nav = $('#nav');
    let toggle = $('#toggler i');
    
    if(nav.css('right')=== '0px'){
        nav.css('right', '-250px');
        toggle.removeClass('fa-times').addClass('fa-bars');
    }else{
        nav.css('right' , '0px');
        toggle.removeClass('fa-bars').addClass('fa-times');
    }
})

$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 120) {
        $('#header').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '15px 40px');
    } else {
        $('#header').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 40px');
    }
});

$('.counter').counterUp({
    delay: 10,
    time: 1500
});


$(window).on('scroll load' , function () {
    if($(window).scrollTop() > 250){
        $('#go-to-home').css('opacity','1');
    }else{
        $('#go-to-home').css('opacity','0');
    }
});



$('#bars').waypoint({
  handler:  function() {
      $('.progress-bar').each(function(){
        const width = $(this).data('val');
//        console.log(width);
        $(this).css('width' , width +'%').css('padding' , '0 15px');
      })
  }
} ,{offset: '80%'});

const portfolio = $('#portfolio-container').isotope({
    originLeft:false
});

$('#portfolio-filters li').on('click' , function(){
    $('#portfolio-filters li').removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolio.isotope({filter: $(this).data('filter')});
});

portfolio.on('arrangeComplete' , function(){
   if($(window).scrollTop()%2 === 0){
       $(window).scrollTop($(window).scrollTop()-1);
   } else{
       $(window).scrollTop($(window).scrollTop()+1);
   }
});

$(".owl-carousel").owlCarousel({
    loop:true , 
    autoplay:true,
    rtl:true,
    responsive:{
        0:{
            items:2
        } ,
        768:{
            items:4
        } , 
        992:{
            items:6
        }
    }
});
