<script src="js/vendor/bootstrap.min.js"></script>

<script src="js/main.js?v=as"></script>
<!-- Preloader -->
<script type="text/javascript">
    //<![CDATA[
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        landing_page_anim();
    })
     //]]>
</script>
<script>
  $(document).ready(function(){
      $('.bxslider').bxSlider({

      });
  })
</script>
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<!-- <script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script> -->
