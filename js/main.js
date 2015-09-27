$(document).ready(function(){
  //get basic data
  deviceWidth = $(window).width();
  featuresHeight = $('.features').height();
  var coverHeight;

  //Set cover height for full screen
  $('.cover').css({
    'height' : $(window).height()+'px'
  })

  coverHeight = $('.cover').height();
    function landing_page_anim(){
      setTimeout(function(){
        //Animate the phone on page load
        coverPhoneTop = coverHeight - $('.cover_phone').height();
        $('.cover_phone').css({
          'margin-top':(coverPhoneTop-20)+'px'
        })

        //coverCopyTop = ( (coverHeight - $('.top_bar').height() - $('navbar').height()) - $('.cover_text').height() )/2;
        coverCopyTop = ((coverHeight - $('.cover_text').height())/2)+$('.top_bar').height() + $('navbar').height();
        $('.cover_copy').css({
          'margin-top':coverCopyTop+'px'
        })
      },500)
    }

    //Preloader on window load
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        landing_page_anim();
        setTimeout(function(){
          howtoAnim();
        },500)
    })
    //Preloader ends

    //How to use phone animation
    function howtoAnim(){
      $('.phone_right').css({
          'margin-left':'16.66666667%'
      })
    }

  var phone_anim_scroll = parseInt(coverHeight)+ parseInt(featuresHeight)/100*40;

  //Animate the navigaion bar on scroll
  window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;

        //Change header style on scroll
        //console.log(top+"--"+phone_anim_scroll);
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

        //Animate the features section
        if(deviceWidth > 768){
          if(top > coverHeight - 200 && top < parseInt(coverHeight)+parseInt(featuresHeight)){
            fadeStuff(0);
            function fadeStuff(i){
              if(i<4){

                // $($('.features_sec')[i]).fadeIn(function(){
                //   $(this).addClass('animated fadeInUp');
                // });

                //$($('.features_sec')[i]).addClass('animated zoomIn');;
                $('.features_sec').fadeIn().addClass('animated zoomIn');
                $('.features').css({
                  'min-height' : $('.features').height()+'px'
                })
                  // i++;
                  // setTimeout(function(){
                  //   fadeStuff(i);
                  // },200)
              }
              else{
                return true;
              }
            }
          }else{
            $('.features_sec').fadeOut().removeClass('animated zoomIn');
          }

        }

  }, false);

        //on clicking Pricing on menu scroll to pricing section
        $('#pricing_menu').click(function(){
          var $href = $(this).attr('href');
          var $anchor = $('#'+$href).offset();
          $('body').animate({ scrollTop: $anchor.top },1000);
          return false;
        })
        //ContactUs page set dynamic height for form container
        getURL = window.location.href;
        baseURL = "/smile_call/";
        //getPage = getURL.search('contact.php');
        getPage = getURL.split(window.location.origin)

        formCoverHeight = $(window).height() - $('.cover_short').height() - $('.footer').height();
        $('.contact_form_cont').css({
          'min-height' : formCoverHeight+'px'
        })

        cont_form = ($('.contact_form_cont').height() - $('.form_cont').height())/2

        $('.contact_form_cont').css({
          'padding-top' : cont_form+'px'
        })

        //FAQ page animation and question expansion effect
        $('.ques').click(function(){
          $('.faq_ans').hide();
          $(this).children().fadeIn()
        })


})
