<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Kid Theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes()?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="profile" href="https://gmpg.org/xfn/11"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div id="page" class="site">
    <header class="header-main">
      <section class="search">
        <div class="container">
          <!-- <div class="text-center d-md-flex align-items-center">
          <?php get_search_form();?></div>
          </div> -->
      </section>
      <section class="top-bar">
          <div class="container">
            <div class="row">
                <div class=" brand col-md-3 col-12 col-lg-2 text-center text-md-left">
                <a href="<?php echo home_url('/')?>">
                  <?php if(has_custom_logo()):?>
                    <?php the_custom_logo()?>
                  <?php else: ?>
                    <p class="site-title"><?php bloginfo( 'title' )?></p>
                    <span><?php bloginfo('description');?></span>
                  <?php endif;?>
                  </a>
                </div>
                <div class="top3 col-md-3 col-12 col-lg-4">
                <?php get_search_form();?></div>
                <div class="top3 second-column col-md-6 col-lg-6">
                  <div class="row">
                      <div class="cart text-right float-right col-lg-8 yeuthich ">
                        <a href="http://localhost:8080/ntm_wp/yeu-thich/" title="Sản phẩm yêu thích"><i style="color:aliceblue" class="far fa-heart kichthuoc yeuthich1"></i></a>
                        <a href="<?php echo wc_get_cart_url(); ?>"><span class="cart-icon"><i style="color:aliceblue" class="fas fa-shopping-cart kichthuoc giohang"></i></span></a>
                        <span class="items giohang1"><?php echo WC()->cart->get_cart_contents_count();?></span>
                      </div>
                      <?php if(class_exists('WooCommerce')):?>
                    <div class="account col-lg-4 ">
                      <div class="navbar-expand">
                        <ul class="nav-bar float-left">
                          <?php if(is_user_logged_in()):?>
                          <li class="">
                            <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))) ?>" class="nav-link"></i><?php _e('','kidtheme');?><i class="far fa-user "></i></a>
                          </li>
                          <li class="left10">
                            <a href="<?php echo esc_url(wp_logout_url(get_permalink(get_option('woocommerce_myaccount_page_id')))) ?>" class="nav-link"><?php _e('Đăng xuất','kidtheme');?></a>
                          </li>
                          <?php else: ?>
                            <li class="left10">
                            <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))) ?>" class="nav-link"><?php _e('Đăng nhập/Đăng ký','kidtheme');?></a>
                          </li>
                          <?php endif; ?>
                        </ul>
                      </div>
                      </div>
                    </div>
                    <?php endif;?>
                  </div>
                </div>
                    <div class="col-12">
                      <nav class=" main-menu navbar navbar-expand-md navbar-light menu2" role="navigation">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <button class="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'kidtheme' ); ?>">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                                <?php
                                wp_nav_menu( array(
                                    'theme_location'    => 'kidtheme_main_menu',
                                    'depth'             => 3,
                                    'container'         => 'div',
                                    'container_class'   => 'collapse navbar-collapse',
                                    'container_id'      => 'bs-example-navbar-collapse-1',
                                    'menu_class'        => 'nav navbar-nav',
                                    'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'            => new WP_Bootstrap_Navwalker(),
                                ) );
                                ?>
                        </nav>
                    </div>   
                    </div>
                </div>
          </div>
        </div>
      </section>
    </header>