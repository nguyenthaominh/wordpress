<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package KidTheme
 */

 get_header();
 ?>
    <div class="content-area">
      <main>
          <div class="container">
            <div class="row">
              <?php
                while(have_posts()): the_post();
                  get_template_part('template-parts/content','page');
              endwhile;
              ?>
            </div>
          </div>
        </section>
      </main>
    </div>
<?php get_footer();?>  