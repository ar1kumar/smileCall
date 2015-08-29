$(document).ready(function(){
  //get basic data
  deviceWidth = $(window).width();
  coverHeight = $('.cover').height();
  featuresHeight = $('.features').height();
  var phone_anim_scroll = parseInt(coverHeight)+ parseInt(featuresHeight)/100*40;
  //Animate the phone on page load
  // setTimeout(function(){
  //   $('.cover_phone').css({
  //     // 'display':'block',
  //     'margin-top':'35%'
  //   })
  // },500)

  //Animate the navigaion bar on scroll
  window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;

        //Change header style on scroll
        console.log(top+"--"+phone_anim_scroll);
        if(top > 30){
          $('.navbar,.top_bar').css({
            'background':'rgba(0,0,0,0.75)'
          })
        }else{
          if(deviceWidth > 768){
            $('.navbar').css({
              'background':'transparent'
            })
          }
          $('.top_bar').css({
            'background': 'rgba(0,0,0,0.5)'
          })
        }

        //Animate phone on how to use section
        if(top > phone_anim_scroll){
          $('.phone_right').css({
              'margin-left':'16.66666667%'
          })
          //$('.phone_right').addClass('col-md-offset-2')
        }
  }, false);
})
