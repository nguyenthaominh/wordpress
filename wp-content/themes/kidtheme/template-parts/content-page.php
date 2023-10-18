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
<article class="col">
  <h1><?php the_title(); ?></h1>
  <div><?php the_content();?></div>
  <?php
      if(comments_open()||get_comments_number()):
        comments_template();
        endif;
  ?>
</article>