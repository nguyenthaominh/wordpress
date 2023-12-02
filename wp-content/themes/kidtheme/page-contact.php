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
 		<section >
						<div class="banner-product">
						</div>
		</section>
    <div class="content-area">
      <main>
          <div class="container">
            <div class="row">
              <?php
                while(have_posts()): the_post();?>
                  <?php get_template_part('template-parts/page/breadcrumb');?>
                  <article>
                <section >
                  <div class="banner-product">
                  </div>
                </section>
                <section class="container contact-me">
                  <div class="contact-maps col-lg-6 "> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7516950361796!2d106.77279011524118!3d10.830304561157266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1678196185872!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div class="contact-detail col-lg-6">
                    <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <p>Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất</p>
                    <form action="">
                      <table>
                        <tr><td>Họ và tên*</td></tr>
                        <tr><td><input type="text" placeholder="Nhập họ và tên"/></td></tr>
                        <tr><td>Email*</td></tr>
                        <tr><td><input type="text" placeholder="Nhập email"/></td></tr>
                        <tr><td>Điện thoại*</td></tr>
                        <tr><td><input type="text" placeholder="Nhập số điện thoại"/></td></tr>
                        <tr><td>Nội dung*</td></tr>
                        <tr><td><textarea rows="5" cols="70"  placeholder="Nội dung liên hệ"></textarea></td></tr>
                    </table>
                    <input class="contact-sub"type="submit" value="GỬI LIÊN HỆ NGAY">
                    </form>
                  </div>
                </section>
              </article>
                  
              <?php endwhile; ?>
             
            </div>
          </div>
        </section>
      </main>
    </div>
<?php get_footer();?>  
