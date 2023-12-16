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
    <section >
						<div class="banner-product">
						</div>
		      </section>
      <main>
      <div class="container" style="padding: 20px;">
        <div class="row" style="margin: 0;">
            <div class="col-lg-9 col-md-8 col-12" style="background-color: #f6f2e4; padding: 15px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <?php
                if (have_posts()):
                    while (have_posts()):
                        the_post();
                        get_template_part('template-parts/content');
                    endwhile;
                    ?>
                    <div class="pagination" style="margin-top: 20px; text-align: center;">
                        <?php
                        the_posts_pagination(array(
                            'prev_text' => '<span class="page-item">' . esc_html__('Previous', 'kidtheme') . '</span>',
                            'next_text' => '<span class="page-item">' . esc_html__('Next', 'kidtheme') . '</span>',
                        ));
                        ?>
                    </div>
                <?php
                else:
                    ?>
                    <p><?php _e('Nothing to display', 'kidtheme'); ?></p>
                <?php endif; ?>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
<?php get_footer();?>  