$(document).ready(function(){
  //get basic data
  deviceWidth = $(window).width();
  featuresHeight = $('.features').height();
  var coverHeight;

  //Set cover height for full screen
  // $('.cover').css({
  //   'height' : $(window).height()+'px'
  // })

  coverHeight = $('.cover').height();

  setTimeout(function(){
    //Animate the phone on page load
    coverPhoneTop = coverHeight - $('.cover_phone').height();
    $('.cover_phone').css({
      'margin-top':coverPhoneTop+'px'
    })

    coverCopyTop = ( (coverHeight - $('.top_bar').height() - $('navbar').height()) - $('.cover_text').height() )/2;
    $('.cover_copy').css({
      'margin-top':coverCopyTop+'px'
    })
  },1000)

  var phone_anim_scroll = parseInt(coverHeight)+ parseInt(featuresHeight)/100*40;

  //Animate the navigaion bar on scroll
  window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;

        //Change header style on scroll
        console.log(top+"--"+phone_anim_scroll);
        if(top > 30){
           $('.top_bar').hide();

            $('.navbar').css({
              'margin-top' : '0px',
              'background':'rgba(0,0,0,0.75)'
            })

            if(deviceWidth > 768){
              $('.top_logo').css({
                'width':'60%'
              })

              $('.menu a, .nav_btn').css({
                'font-size' : '0.8em'
              })
              $('.nav_btn').css({
                'margin-top':'10px'
              })
              $('.menu_items').css({
                'margin-top': '0px'
              })
            }
            // $('.top_bar').css({
            //   'margin-top' : '0px',
            //   'background':'rgba(0,0,0,0.75)'
            // })

        }else{
          if(deviceWidth > 768){
            $('.navbar').css({
              'margin-top' : '35px',
              'background':'transparent'
            })
            $('.menu a, .nav_btn').css({
              'font-size' : '1em'
            })
            $('.nav_btn').css({
              'margin-top':'6px'
            })
            $('.top_logo').css({
              'width':'80%'
              // 'margin-top':'15px';
            })
            $('.menu_items').css({
              'margin-top': '5px'
            })
          }else{
            $('.navbar').css({
              'margin-top' : '35px',
              'background':'rgba(0,0,0,0.75)'
            })
          }
          $('.top_bar').css({
            'display':'block',
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

        //ContactUs page set dynamic height for form container
        getURL = window.location.href;
        baseURL = "/smile_call/";
        //getPage = getURL.search('contact.php');
        getPage = getURL.split(window.location.origin)

        formCoverHeight = $(window).height() - $('.cover_short').height() - $('.footer').height();
        $('.contact_form_cont').css({
          'height' : formCoverHeight+'px'
        })


})
