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

 get_header();
 ?>
    <div class="content-area">
      <main>
          <div class="container">
            <div class="row">
              <div class="col-lg-9 col-md-8 col-12">
              <?php
              if(have_posts() ):
                while(have_posts()): the_post();
                    get_template_part('template-parts/content');
              endwhile;
              the_posts_pagination(array(
                'prev_text'   => __('Previous','kidtheme'),
                'next_text'   => __('Next','kidtheme'),

              ));
            else:
            ?>
            <p><?php _e('Nothing to display','kidtheme');?></p>
            <?php endif; ?>
            </div>   
              <?php get_sidebar(); ?>        
            </div>
          </div>
      </main>
    </div>
<?php get_footer();?>  