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
// Register Custom Navigation Walker
function register_navwalker(){
	require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );

require_once get_template_directory(). '/inc/customizer.php';

function kidtheme_scripts(){
  // wp_enqueue_script('bootstrap-js',get_template_directory_uri() . '/inc/bootstrap.min.js',array('jquery'),'5.3.2',true);
  wp_enqueue_script('bootstrap-js',get_template_directory_uri() . '/inc/bootstrap.bundle.min.js',array('jquery'),'5.3.2',true);
  wp_enqueue_style('bootstrap-css', get_template_directory_uri() .'/inc/bootstrap.min.css',array(),'5.3.2','all');
  wp_enqueue_style('kidtheme-style', get_stylesheet_uri(),array(),filemtime(get_template_directory().'/style.css'),'all');

  // Flexslider Javascript and Css files
  wp_enqueue_script('flexslider-min-js',get_template_directory_uri().'/inc/flexslider/jquery.flexslider-min.js', array('jquery'),'',true);
  wp_enqueue_style('flexslider-css',get_template_directory_uri().'/inc/flexslider/flexslider.css',array(),'','all');
  wp_enqueue_script('flexslider-js',get_template_directory_uri().'/inc/flexslider/flexslider.js', array('jquery'),'',true);
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
    add_theme_support('custom-logo',array(
      'height' =>85,
      'width'=>160,
      'flex_height'=>true,
      'flex_width'=>true,
    ));
    add_image_size('kidtheme-slider',1920,800,array('center','center'));
    if ( ! isset( $content_width ) ) {
      $content_width = 600;
    }
    

}

add_action('after_setup_theme','kidtheme_config',0);

if(class_exists('WooCommerce')){
  require get_template_directory(). '/inc/wc-modifications.php';
}
/**
 * Show cart contents / total Ajax
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'kidtheme_woocommerce_header_add_to_cart_fragment' );

function kidtheme_woocommerce_header_add_to_cart_fragment( $fragments ) {
	global $woocommerce;

	ob_start();

	?>
	  <span class="items"><?php echo WC()->cart->get_cart_contents_count();?></span>
	<?php
	$fragments['span.items'] = ob_get_clean();
	return $fragments;
}