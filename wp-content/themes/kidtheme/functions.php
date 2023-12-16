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
      'kidtheme_main_menu'=> __('KidTheme Main Menu','kidtheme'),
      'kidtheme_footer_menu' => __('KidTheme Footer Menu','kidtheme')
    )
    );
    $textdomain='kidtheme';
    load_theme_textdomain($textdomain,get_stylesheet_directory().'/languages/');
    load_theme_textdomain($textdomain,get_template_directory().'/languages/');
    
    add_theme_support('woocommerce',array(
      'thumbnail_image_width'=>255,
      'single_image_width'=>255,
      'product_grid'=>array(
        'default_rows'=>10,
        'min_rows'=>5,
        'max_rows'=>10,
        'default_columns'=>4,
        'min_columns'=>4,
        'max_columns'=>4,
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
    add_theme_support('post-thumbnails');
    add_image_size('kidtheme-slider',1920,800,array('center','center'));
    add_image_size('kidtheme-blog',960,640,array('center','center'));
    if ( ! isset( $content_width ) ) {
      $content_width = 600;
    }
    add_theme_support('title-tag');
    

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
add_action('widgets_init','kidtheme_sidebars');
function kidtheme_sidebars(){
  register_sidebar( array(
    'name'        => __('Kidtheme Main Sidebar','kidtheme'),
    'id'          =>  'kidtheme-sidebar-1',
    'description' => __('Drag and drop your widgets here','kidtheme'),
    'before_widget' =>'<div id="%1$s" class= "widget %2$s widget-wrapper">',
    'after_widget'  =>'</div>',
    'before_title' =>'<h4 class="widget-title">',
    'after_title'   =>'</h4>'
  ));
  register_sidebar( array(
    'name'        => __('Sidebar shop','kidtheme'),
    'id'          =>  'kidtheme-sidebar-shop',
    'description' => __('Drag and drop your WooCommerce widgets here','kidtheme'),
    'before_widget' =>'<div id="%1$s" class= "widget %2$s widget-wrapper">',
    'after_widget'  =>'</div>',
    'before_title' =>'<h4 class="widget-title">',
    'after_title'   =>'</h4>'
  ));
  register_sidebar( array(
    'name'        => __('Footer Sidebar 1','kidtheme'),
    'id'          =>  'kidtheme-sidebar-footer1',
    'description' => __('Drag and drop your widgets here','kidtheme'),
    'before_widget' =>'<div id="%1$s" class= "widget %2$s widget-wrapper">',
    'after_widget'  =>'</div>',
    'before_title' =>'<h4 class="widget-title">',
    'after_title'   =>'</h4>'
  ));
  register_sidebar( array(
    'name'        => __('Footer Sidebar 2','kidtheme'),
    'id'          =>  'kidtheme-sidebar-footer2',
    'description' => __('Drag and drop your widgets here','kidtheme'),
    'before_widget' =>'<div id="%1$s" class= "widget %2$s widget-wrapper">',
    'after_widget'  =>'</div>',
    'before_title' =>'<h4 class="widget-title">',
    'after_title'   =>'</h4>'
  ));
  register_sidebar( array(
    'name'        => __('Footer Sidebar 3','kidtheme'),
    'id'          =>  'kidtheme-sidebar-footer3',
    'description' => __('Drag and drop your widgets here','kidtheme'),
    'before_widget' =>'<div id="%1$s" class= "widget %2$s widget-wrapper">',
    'after_widget'  =>'</div>',
    'before_title' =>'<h4 class="widget-title">',
    'after_title'   =>'</h4>'
  ));
  add_filter( 'woocommerce_product_single_add_to_cart_text', 'woocommerce_custom_single_add_to_cart_text' ); 
function woocommerce_custom_single_add_to_cart_text() {
    return __( 'Thêm vào giỏ hàng', 'woocommerce' ); 
}
// To change add to cart text on product archives(Collection) page
add_filter( 'woocommerce_product_add_to_cart_text', 'woocommerce_custom_product_add_to_cart_text' );  
function woocommerce_custom_product_add_to_cart_text() {
    return __( 'Thêm vào giỏ hàng', 'woocommerce' );
}

}
