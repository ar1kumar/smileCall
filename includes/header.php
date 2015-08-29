<!-- Preloader -->
<script type="text/javascript">
    //<![CDATA[
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })
     //]]>
</script>
<div id="preloader">
    <div id="status">&nbsp;</div>
</div>
<!--preloader ends	-->
<div class="top_bar col-xs-12 no-pad z-top easing">
  <div class="container-fluid">
    <div class="top_icons col-md-4 col-xs-12 right-text white-text roboto-light">
      <span class="col-md-6 col-xs-6 social">
        <a href="#"><span class="icon-facebook"></span></a>
        <a href="#"><span class="icon-twitter"></span></a>
        <a href="#"><span class="icon-google-plus"></span></a>
      </span>
      <p class="col-md-6 col-xs-6 "><a href="#" class="no-dec white-text">SignUp</a> | <a href="#" class="no-dec white-text">Login</a></p>
    </div>
  </div>
</div>
<nav class="navbar navbar-default z-top easing">
  <div class="container-fluid">
    <!-- <div class="top_bar col-xs-12 no-pad">
      <div class="top_icons col-md-4 right-text white-text">
        SignUp | Login
      </div>
    </div> -->
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand">
        <img src="img/logo.png" alt="" class="top_logo">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right mt-15 center-text menu_items">
        <li class="menu"><a href="#">HOW TO USE</a></li>
        <li class="menu"><a href="#">PRICING</a></li>
        <li class="menu"><a href="#">RATES</a></li>
        <li class="menu"><a href="#">RESELLER</a></li>
        <li class="btn_adj">
          <button class="btn nav_btn gotham-med">GET THE APP</button>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
