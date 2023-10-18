<?php
/**
 * The template for the sidebar containing the shop widget area
 * @package KidTheme
 * 
 */
?>
<?php if(is_active_sidebar('kidtheme-sidebar-shop')): ?>
    <?php dynamic_sidebar('kidtheme-sidebar-shop');?>
<?php endif;