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
$kidtheme_comment_count = get_comments_number();
if ( have_comments() ) :
  ?>
  <h2 class="comments-title" style="font-size: 24px; margin-bottom: 20px;">
    <?php if ( '1' === $kidtheme_comment_count ) : ?>
      <?php esc_html_e( '1 Bình luận', 'kidtheme' ); ?>
    <?php else : ?>
      <?php
      printf(
        /* translators: %s: Comment count number. */
        esc_html( _nx( '%s Bình luận', '%s Bình luận', $kidtheme_comment_count, 'Comments title', 'kidtheme' ) ),
        esc_html( number_format_i18n( $kidtheme_comment_count ) )
      );
      ?>
    <?php endif; ?>
  </h2><!-- .comments-title -->

  <ol class="comment-list" style="list-style: none; margin: 0; padding: 0;">
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
        'prev_text'          => is_rtl() ? '&#8594; ' . esc_html__( 'Older comments', 'kidtheme' ) : esc_html__( 'Older comments', 'kidtheme' ),
        'next_text'          => is_rtl() ? esc_html__( 'Newer comments', 'kidtheme' ) . ' &#8592;' : esc_html__( 'Newer comments', 'kidtheme' ) . ' &#8594;',
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
