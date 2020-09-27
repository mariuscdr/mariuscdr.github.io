

$( document ).ready(function() {



  $('#anim-titre').css(
    {
     'margin-top' : +($(window).height()*0.5) + "px"
     });

     $('#anim-paysage').css(
       {
        'margin-top' : +($(window).height()*1.5) + "px"
        });
$(window).scroll(function () {
    if ($(this).scrollTop() < $(window).height()/1.2)
      {
         $('#anim-titre').css(
           {
            'margin-top' : +($(window).height()*0.5) + $(this).scrollTop()*0.2 + "px"
            });
       }

    });

  $(window).scroll(function () {
      if ($(this).scrollTop() < $(window).height()/8)
        {
           $('#anim-paysage').css(
             {
              'margin-top' : +($(window).height()*0.5) + $(this).scrollTop()/3 + "px"
              });
         }

        });

    $('#fl-right').click(function() {
      $('#defilement').css(
        {

        }
      )

    });

    var clic = 0;
    $('#defilement').click(function() {
      if (clic == 0)
      {
        $('.defilement').css(
          {
            'width' : 55 + "vw"
          })
          clic = 1;
      }
      else if (clic == 1)
      {
        $('.defilement').css(
          {
            'width' : 40 + "vw"
          })
          clic = 0;
      }

    });


});
