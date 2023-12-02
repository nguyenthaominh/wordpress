<?php
/**
 * The searchform.php template.
 *

 * @package KidTheme

 */


?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input style="border-radius:15px" type="search" class="search-field" placeholder="<?php echo esc_attr_x('Search &hellip;','placeholder','kidtheme');?>" value="<?php echo get_search_query(); ?>" name="s" />
	<button class="submit2" type="submit" class="search-submit"><span class="srceen-reader-text"><?php echo _x('','submit button','kidtheme');?></span></button>
  <?php if(class_exists('WooCommerce')):?>
    <input type="hidden" value="product" name="post_type" id="post-type">
  <?php endif; ?>
  
</form>
