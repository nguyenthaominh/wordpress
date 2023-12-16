<?php
/*
Template Name: Home Page
*/

get_header();
?>
<div class="content-area">
      <main>
        <section class="slider">
        <div class="flexslider">
          <ul class="slides">
            <?php
            for($i=1; $i<4; $i++):
              $slider_page[$i] =get_theme_mod('set_slider_page'.$i);
              $slider_button_text[$i]=get_theme_mod('set_slider_button_text'.$i);
              $slider_button_url[$i]= get_theme_mod('set_slider_button_url'.$i);
            endfor;
            $args=array(
              'post_type' =>'page',
              'posts_per_page'=>3,
              'post__in' =>$slider_page,
              'orderby'=>'post__in',
            );
            $slider_loop =new WP_Query($args);
            $j=1;
            if($slider_loop->have_posts()):
              while($slider_loop->have_posts()):
                $slider_loop->the_post();
            ?>
            <li>
              <?php the_post_thumbnail('kidtheme-slider',array('class'=>'img-fluid'));?>
              <div class="container">
                <div class="slider-details-container">
                  <div class="slider-title">
                    <h1><?php the_title(); ?></h1>
                  </div>
                  <div class="slider-description">
                    <div class="subtitle"><?php the_content(); ?></div>
                    <a class="link" href="<?php echo $slider_button_url[$j]; ?>"><?php echo $slider_button_text[$j];?></a>
                  </div>
                  
              </div>
              </div>
            </li>
            <?php
            $j++;
            endwhile;
            wp_reset_postdata();
          endif;
          ?>
          </ul>
        </div>
        </section>
        <div class="promotion-banner container">
          <div class="row">
            <div class="col-sm-3 col-lg-3 promotion-delivery promotion">
              <ul> <a href="#">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></li>
                <li class="upcase">giao hàng toàn quốc</li>
                <li>Miễn phí vận chuyển với các hóa đơn hàng trị giá trên 2.000.000Đ</li>
              <ul>
                </a>
            </div>
            <div class="col-sm-3 col-lg-3 promotion-tel promotion">
              <ul> <a href="#">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                </svg></li>
                <li class="upcase">hỗ trợ online 24/24</li>
                <li>Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần</li>
              <ul></a>
              </a> 
            </div>
            <div class=" col-sm-3 col-lg-3 promotion-back promotion">
              <ul> <a href="#">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-ubuntu" viewBox="0 0 16 16">
                  <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
                </svg></li>
                <li class="upcase">đổi hàng dễ dàng </li>
                <li>Miễn phí đổi trả trong 30 ngày đầu tiên cho tất cả mặt hàng</li>
              <ul> </a>
            </div>
            <div class="col-sm-3 col-lg-3  promotion-gif promotion">
              <ul> <a href="#">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                </svg></li>
                <li class="upcase">quà tặng hấp dẫn </li>
                <li>Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng</li>
              <ul> </a>
            </div>
            </div>
      </div> 
        <?php if(class_exists('WooCommerce')): ?>
        <section class="best-selling-products">
          
          <?php
          $best_selling_products_limit=get_theme_mod('set_best_selling_products_max_num',4);
          $best_selling_products_col=get_theme_mod('set_best_selling_products_max_col',4);
          $arrivals_limit=get_theme_mod('set_new_arrivals_max_num',4);
          $arrivals_col=get_theme_mod('set_new_arrivals_max_col',4);
          $sale_products_limit=get_theme_mod('set_sale_products_max_num',4);
          $sale_products_col=get_theme_mod('set_sale_products_max_col',4);
          ?>
          <div class="container">
            <div class="row">
              <div class="section-title tieude">
              <h2 class="upcase sub-title center">&#9739<?php echo get_theme_mod('set_best_selling_products_title', __('Sản phẩm bán chạy','kidtheme'));?>&#9739</h2>
              </div>
              <?php echo do_shortcode('[best_selling_products limit="'.$best_selling_products_limit.'" columns="'.$best_selling_products_col.'" orderby="popularity"]');?>
            </div>
          </div>
        </section>
        <section class="new-arrivals">
          <div class="container">
          <div class="section-title">
            <h2 class="upcase sub-title center">&#9739<?php echo get_theme_mod('set_new_arrivals_title', __('Sản phẩm mới','kidtheme'));?>&#9739</h2>
          </div>
          <?php echo do_shortcode('[products limit="'.$arrivals_limit.'" columns="'.$arrivals_col.'" orderby="date"]');?>
          </div>
        </section>
        <section class="sale_products_products">
          <div class="container">
          <div class="section-title">
            <h2 class="upcase sub-title center">&#9739<?php echo get_theme_mod('set_sale_products_products_title', __('Sản phẩm khuyến mãi','kidtheme'));?>&#9739</h2>
          </div>
          <?php echo do_shortcode('[sale_products limit="'.$sale_products_limit.'" columns="'.$sale_products_col.'" orderby="date"]');?>
          </div>
        </section>
        <?php
        $showdeal     = get_theme_mod('set_deal_show',0);
        $deal         = get_theme_mod('set_deal');
        $currency     = get_woocommerce_currency_symbol();
        $regular      = get_post_meta($deal,'_regular_price',true);
        $sale         = get_post_meta($deal,'_sale_price',true);

        if( $showdeal==1 &&(!empty($deal))):
          $discount_percentage= absint(100-(($sale/$regular)*100));
        ?>
        <section class="deal-of-the-week">
          <div class="container">
            <div class="section-title">
            <h2 class="upcase"><?php echo get_theme_mod('set_deal_title', __('Giảm giá trong tuần','kidtheme'));?></h2>
            </div>
              <h2></h2>
              <div class="row d-flex algin-items-center">
              <div class="deal-img col-md-6 col-12 ml-auto text-center">
                <?php echo get_the_post_thumbnail( $deal,'large',array('class'=>'img-fluid'));?>
              </div>
              <div class="deal-desc col-md-4 col-12 mr-auto text-center">
                <?php if(!empty($sale)):?>
                  <span class="discount">
                <?php echo $discount_percentage. __( '% OFF','kidtheme');?>
                  </span>
                <?php endif;?>
                <h3>
                  <a href="<?php echo get_permalink($deal); ?>"><?php echo get_the_title($deal); ?></a>
              </h3>
              <p><?php echo get_the_excerpt($deal); ?></p>
              <div class="prices">
                <span class="regular regular1">
                  <?php
                  echo $currency;
                  echo $regular;
                  ?>
                </span>
                <?php if(!empty($sale)): ?>
                  <span class="sale sale1">
                    <?php
                    echo $currency;
                    echo $sale;
                    ?>
                  </span>
                  <?php endif;?>
              </div>
              <a href="<?php echo esc_url('?add-to-cart='.$deal);?>" class="add-to-cart"><?php _e('Thêm vào giỏ hàng','kidtheme'); ?> <i style="color:black" class="fas fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
          </section>
          <?php endif;?>
          
          <?php endif;?>
        <section class="lab-blog">
          <div class="container">
            <div class="section-title">
              <h2 class="upcase khoangtrong"><?php echo get_theme_mod('set_blog_title',__('Tin tức','kidtheme'));?></h2>

            </div>
            <div class="row">
              <?php
              $args=array(
                'post_type'  => 'post',
                'posts_per_page'=>2,
              );
              $blog_posts= new WP_Query($args);
              if($blog_posts->have_posts() ):
                while($blog_posts->have_posts()): $blog_posts->the_post();
                ?>
                <article class="col-12 col-md-6">
                <a href="<?php the_permalink();?>">
                  <?php
                    if(has_post_thumbnail()):
                      the_post_thumbnail('kidtheme-blog',array('class'=>'img-fluid'));
                    endif;
                  ?>
                  </a>
                  <h3>
                    <a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
                  <div class="excerpt"><?php the_excerpt();?></div>
                </article>
                <?php
              endwhile;
               wp_reset_postdata();
            else:
            ?>
            <p><?php _e('Không có tin tức','kidtheme');?></p>
            <?php endif; ?>
            
            </div>
          </div>
        </section>
      </main>
    </div>
<?php get_footer();?>  