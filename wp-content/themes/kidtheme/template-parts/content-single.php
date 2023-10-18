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

<article id="post-<?php the_ID();?>" <?php post_class(); ?>>
  <header>
    <h1><?php the_title(); ?></h1>
    <div class="meta">
      <p><?php _e('Published by','kidtheme');?><?php the_author_posts_link(); ?> <?php _e('on','kidtheme');?><?php echo get_the_date(); ?><br/>
      <?php _e('Categories','kidtheme');?>:<span><?php the_category(' ');?></span>
      <?php if(has_tag()):?>
        <?php _e('Tags','kidtheme');?>:<span><?php the_tags('',', ');?></span>
      <?php endif;?>
      </p>
    </div>
    <div class="post-thumbnail">
      <?php
      if(has_post_thumbnail()):
        the_post_thumbnail('kidtheme_blog',array('class'=>'img-fluid'));
      endif;
      ?>
    </div>
  </header>
  <div class="content">
    <?php
    wp_link_pages(
      array(
        'before'    => '<p class="inner-pagination">' . __('Pages','kidtheme'),
        'after'     => '</p>',
      )
      );
    ?>
    <?php the_content();?>
  </div>
  </article>