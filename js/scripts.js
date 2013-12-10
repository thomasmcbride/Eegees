$(document).ready(function(){

  $('.bxslider').bxSlider();


  $('.mobile-nav-button').on('click', function(event){
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('.mobile-nav').toggle('slide');

    }); // end function
  
});