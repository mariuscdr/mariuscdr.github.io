

$( document ).ready(function() {

  $('#anim-titre').css(
    {
     'margin-top' : +($(window).height()*0.5) + "px"
     });

     $('#anim-paysage').css(
       {
        'margin-top' : +($(window).height()*1.5) + $(this).scrollTop()/3 + "px"
        });
$(window).scroll(function () {
    if ($(this).scrollTop() < $(window).height()/1.2)
      {
         $('#anim-titre').css(
           {
            'margin-top' : +($(window).height()*0.5) + $(this).scrollTop()/3 + "px"
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
});
