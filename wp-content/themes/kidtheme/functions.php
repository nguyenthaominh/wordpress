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
function kidtheme_scripts(){
  wp_enqueue_script('bootstrap-js',get_template_directory_uri() . '/inc/bootstrap.min.js',array('jquery'),'4.3.1',true);
  wp_enqueue_style('bootstrap-css', get_template_directory_uri() .'/inc/bootstrap.min.css',array(),'4.3.1','all');
  wp_enqueue_style('kidtheme-style', get_stylesheet_uri(),array(),filemtime(get_template_directory().'/style.css'),'all');
}
add_action('wp_enqueue_scripts','kidtheme_scripts');

function kidtheme_config(){
  register_nav_menus(
    array(
      'kidtheme_main_menu'=> 'KidTheme Main Menu',
      'kidtheme_footer_menu' => 'KidTheme Footer Menu'
    )
    );
    add_theme_support('woocommerce',array(
      'thumbnail_image_width'=>255,
      'single_image_width'=>255,
      'product_grid'=>array(
        'default_rows'=>10,
        'min_rows'=>5,
        'max_rows'=>10,
        'default_columns'=>1,
        'min_columns'=>1,
        'max_columns'=>1,
      )
    ));
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
    
    if ( ! isset( $content_width ) ) {
      $content_width = 600;
    }
    

}

add_action('after_setup_theme','kidtheme_config',0);

if(class_exists('WooCommerce')){
  require get_template_directory(). '/inc/wc-modifications.php';
}
