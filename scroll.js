$(document).ready(function(){

  var fromTop = 0;
  $(window).scroll(function(){

   fromTop = $(window).scrollTop();
   console.log(fromTop);




    if(fromTop > 1000 ){
       // if scrolled MORE than 1000 pixels





      $("#mainimage").css({
           "background-image" : "url('img/project4face-01.png')"
           });


    } else {
      // else scrolled LESS than 1000 pixels

      $("body").css({"background-color":"white"});

      $("#face").css({
         "background-image" : "url('img/project4face-01.png')"
       });



    }//end if statement


    if(fromTop < 2000 ){
       // if we have scrolled MORE than 2000 pixels use this image





      $("#mainimage").css({
           "background-image" : "url('img/project4face-01.png')"
           });


    } else {
      // else if we have scrolled LESS than 2000 pixels use this image

      $("body").css({"background-color":"lightgrey"});

      $("#face").css({
         "background-image" : "url('img/project4face-03.png')"
       });



    }//end if statement


        if(fromTop < 4000 ){
           // if we have scrolled MORE than 4000 pixels use this image




          $("#mainimage").css({
               "background-image" : "url('img/project4face-01.png')"
               });


        } else {
          // else if we have scrolled LESS than 4000 pixels use this image

          $("body").css({"background-color":"darkgrey"});

          $("#face").css({
             "background-image" : "url('img/project4face-02.png')"
           });



        }//end if statement

        if(fromTop < 6000 ){
           // if we have scrolled MORE than 4000 pixels use this image



          $("#mainimage").css({
               "background-image" : "url('img/project4face-01.png')"
               });


        } else {
          // else if we have scrolled LESS than 4000 pixels use this image

          $("body").css({"background-color":"grey"});

          $("#face").css({
             "background-image" : "url('img/project4face-04.png')"
           });



        }//end if statement
        if(fromTop < 9000 ){
           // if we have scrolled MORE than 4000 pixels use this image

        } else {
          // else if we have scrolled LESS than 4000 pixels use this image

          $("body").css({"background-color":"black"});

          $("#face").css({
             "background-image" : "url('img/project4face-04.png')"
           });
        }//end if statement
    if(fromTop < 9289){
         $("#face").css({
     "top" : 100 + fromTop * 1.05 +"px"
   });
    } else {
       $("#face").css({
     "top" : 9289 +"px"
   });
    }

  });

});
