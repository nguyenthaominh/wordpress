<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link  https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 *
 * @package Kid Theme
 */
?>

<footer>
      <section class="footer-widgets">
        <div class="container">
          <div class="row"></div>
        </div>
      </section>
      <section class="copyright footer-bg">
        <div class="container">
          <div class="row">
            <?php if(is_active_sidebar('kidtheme-sidebar-footer1')): ?>
              <div class="col-md-4 col-12">
              <?php dynamic_sidebar('kidtheme-sidebar-footer1');?>
              </div>
              <?php endif;?>

              <?php if(is_active_sidebar('kidtheme-sidebar-footer2')): ?>
                <div class="col-md-4 col-12">
              <?php dynamic_sidebar('kidtheme-sidebar-footer2');?>
              </div>
              <?php endif;?>
              <?php if(is_active_sidebar('kidtheme-sidebar-footer3')): ?>
                <div class="col-md-4 col-12">
              <?php dynamic_sidebar('kidtheme-sidebar-footer3');?>
              </div>
              <?php endif;?>

          </div>
          <div class="row">
            <div class="copyright-text col-12 col-md-6">
              <p><?php echo get_theme_mod('set_copyright',__('Copyright X-All Rights Reserved','kidtheme'));?></p>
            </div>
            <nav class="footer-menu col-12 col-md-6 text-left text-md-right">
              <?php
              wp_nav_menu(
                array(
                  'theme_location'=>'kidtheme_footer_menu'
                )
                );
              ?>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  </div> 
  <?php wp_footer();?>
</body>
</html>