<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Kid Theme
 * 
 */
?>
<article <?php post_class(); ?>>
  <h2>
    <a href="<?php the_permalink();?>"><?php the_title(); ?></a>
  </h2>
  <div class="post-thumbnail">
    <?php
    if(has_post_thumbnail()):
      the_post_thumbnail('theme-blog',array('class'=>'img-fluid'));
    endif;
    ?>
  </div>
  <div class="meta">
    <p><?php _e('Đăng bởi ','kidtheme');?><?php the_author_posts_link();?> <?php _e(' Ngày','kidtheme');?> <?php echo get_the_date();?>
  <br />
  <?php if(has_category()):?>
    <?php _e('Categories','kidtheme');?>: <span><?php the_category(' ')?></span>
  <?php endif; ?>
  <br />
  <?php if(has_tag()): ?>
    <?php _e('Tags','kidtheme');?>:<span><?php the_tags('',',');?></span>
  <?php endif; ?>
  </p>
  </div>
  <div><?php the_excerpt();?></div>
</article>