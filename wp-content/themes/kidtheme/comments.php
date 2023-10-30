<?php
/**
 * The template for displaying commnets
 * The area of the page that contains both current commnents
 * and the comment form
 * @package KidTheme
 * 
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if(post_password_required()){
  return;
}
?>
<div id="comments" class="comments-area default-max-width <?php echo get_option( 'show_avatars' ) ? 'show-avatars' : ''; ?>">

<?php
if ( have_comments() ) :
  ?>
  <h2 class="comments-title">
    <?php if ( '1' === $kidtheme_comment_count ) : ?>
      <?php esc_html_e( '1 comment', 'kidtheme' ); ?>
    <?php else : ?>
      <?php
      printf(
        /* translators: %s: Comment count number. */
        esc_html( _nx( '%s comment', '%s comments', $kidtheme_comment_count, 'Comments title', 'kidtheme' ) ),
        esc_html( number_format_i18n( $kidtheme_comment_count ) )
      );
      ?>
    <?php endif; ?>
  </h2><!-- .comments-title -->

  <ol class="comment-list">
    <?php
    wp_list_comments(
      array(
        'avatar_size' => 60,
        'style'       => 'ol',
        'short_ping'  => true,
      )
    );
    ?>
  </ol><!-- .comment-list -->

  <?php
  the_comments_pagination(
    array(
      'before_page_number' => esc_html__( 'Page', 'kidtheme' ) . ' ',
      'mid_size'           => 0,
      'prev_text'          => sprintf(
        '%s <span class="nav-prev-text">%s</span>',
        is_rtl() ? kidtheme_get_icon_svg( 'ui', 'arrow_right' ) : kidtheme_get_icon_svg( 'ui', 'arrow_left' ),
        esc_html__( 'Older comments', 'kidtheme' )
      ),
      'next_text'          => sprintf(
        '<span class="nav-next-text">%s</span> %s',
        esc_html__( 'Newer comments', 'kidtheme' ),
        is_rtl() ? kidtheme_get_icon_svg( 'ui', 'arrow_left' ) : kidtheme_get_icon_svg( 'ui', 'arrow_right' )
      ),
    )
  );
  ?>

  <?php if ( ! comments_open() ) : ?>
    <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'kidtheme' ); ?></p>
  <?php endif; ?>
<?php endif; ?>

<?php
comment_form(
  array(
    'title_reply'        => esc_html__( 'Bình luận', 'kidtheme' ),
    'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
    'title_reply_after'  => '</h2>',
  )
);
?>

</div><!-- #comments -->
