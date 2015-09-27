<?php include('includes/head.php'); ?>
<body>
  <?php include('includes/header.php'); ?>
  <div class="wrapper">
    <div class="cover_short"></div>
    <div class="container-fluid no-pad">
      <div class="contact_form_cont col-xs-12 no-pad center-text roboto-medium">
        <div class="form_cont col-xs-12 no-pad">
          <h2 class="center-text red-text no-mar oboto-medium col-xs-12 mob-mt-25">Contact Us</h2>
          <form action="#" method="post" class="mt-30">
            <input type="text" name="name" placeholder="Name" class="col-md-4 col-md-offset-4 form_input col-xs-10 col-xs-offset-1">
            <input type="number" name="contact" placeholder="Contact Number" class="col-md-4 col-md-offset-4 mt-25 form_input col-xs-10 col-xs-offset-1">
            <input type="email" name="email" placeholder="Email" class="col-md-4 col-md-offset-4 mt-25 form_input col-xs-10 col-xs-offset-1">
            <textarea name="comments" id="" cols="30" rows="5" class="col-md-4 col-md-offset-4 mt-25 form_comment col-xs-10 col-xs-offset-1" placeholder="Comments..."></textarea>
            <input type="submit" value="SUBMIT" class="mt-25 col-md-2 col-md-offset-4 submit_btn roboto-medium col-xs-8 col-xs-offset-2">
          </form>
        </div>

      </div>
    </div>
  </div>
  <?php include('includes/footer.php'); ?>
</body>
<?php include('includes/bottom.php'); ?>
