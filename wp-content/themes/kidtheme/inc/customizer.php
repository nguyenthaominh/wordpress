<?php
/**
 * Kid Theme Customizer
 * @package KidTheme
 */
function kidtheme_customizer($wp_customize){
  //Copyright Section
  $wp_customize->add_section(
    'sec_copyright',array(
      'title' => __('Cài đặt phần Copyright','kidtheme'),
      'description'=> __('Cài đặt phần Copyright','kidtheme')
    )

  );
    //Field 1-Copyright TextBox
    $wp_customize->add_setting(
      'set_copyright',array(
        'type'              => 'theme_mod',
        'default'           =>'',
        'sannitize_callback'=>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_copyright',array(
          'label'         => __('Copyright','kidtheme'),
          'description'   => __('Please, add your copy right information here','kidtheme'),
          'section'       =>'sec_copyright',
          'type'          =>'text'
        )
        );
  /*-------------------------------------------------------------------------------*/
  //Slider Section
  $wp_customize->add_section(
    'sec_slider',array(
      'title'       => __('Cài đặt slider','kidtheme'),
      'description' => __('Cài đặt slider','kidtheme')
    )
    );

    // Field1-Slider page Number1
    $wp_customize->add_setting(
      'set_slider_page1',array(
        'type'    => 'theme_mod',
        'default' =>'',
        'sanitize_callback'=>'absint'
      )
      );
      $wp_customize->add_control(
        'set_slider_page1',array(
          'label'       =>__('Set slider Page 1','kidtheme'),
          'description' =>__('Set slider Page 1','kidtheme'),
          'section'     =>'sec_slider',
          'type'        =>'dropdown-pages'
        )
        );
         // Field2-Slider button Text Number1
    $wp_customize->add_setting(
      'set_slider_button_text1',array(
        'type'                => 'theme_mod',
        'default'             =>'',
        'sanitize_callback'   =>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_text1',array(
          'label'         =>__('Button Text for Page 1','kidtheme'),
          'description'   =>__('Button Text for Page 1','kidtheme'),
          'section'       =>'sec_slider',
          'type'          =>'text'
        )
        );
                // Field 3-Slider button url Number1
    $wp_customize->add_setting(
      'set_slider_button_url1',array(
        'type'              => 'theme_mod',
        'default'           =>'',
        'sannitize_callback'=>'esc_url_raw'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_url1',array(
          'label'           =>__('URL for Page 1','kidtheme'),
          'description'     =>__('URL for Page 1','kidtheme'),
          'section'         =>'sec_slider',
          'type'            =>'url'
        )
        );
        // Field4-Slider page Number2
          $wp_customize->add_setting(
            'set_slider_page2',array(
              'type'              => 'theme_mod',
              'default'           =>'',
              'sanitize_callback' =>'absint'
            )
            );
          $wp_customize->add_control(
            'set_slider_page2',array(
              'label'             =>__('Set slider Page 2','kidtheme'),
              'description'       =>__('Set slider Page 2','kidtheme'),
              'section'           =>'sec_slider',
              'type'              =>'dropdown-pages'
            )
            );
            
          // Field5-Slider button Text Number2
    $wp_customize->add_setting(
      'set_slider_button_text2',array(
        'type'              => 'theme_mod',
        'default'           =>'',
        'sanitize_callback' =>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_text2',array(
          'label'           => __('Button Text for Page 2','kidtheme'),
          'description'     =>__('Button Text for Page 2'.'kidtheme'),
          'section'         =>'sec_slider',
          'type'            =>'text'
        )
        );
         // Field 6-Slider button url Number2
    $wp_customize->add_setting(
      'set_slider_button_url2',array(
        'type'              => 'theme_mod',
        'default'           =>'',
        'sannitize_callback'=>'esc_url_raw'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_url2',array(
          'label'           =>__('URL for Page 2','kidtheme'),
          'description'     =>__('URL for Page 2','kidtheme'),
          'section'         =>'sec_slider',
          'type'            =>'url'
        )
        );
       // Field 7-Slider page Number3
       $wp_customize->add_setting(
        'set_slider_page3',array(
          'type'              => 'theme_mod',
          'default'           =>'',
          'sanitize_callback' =>'absint'
        )
        );
        $wp_customize->add_control(
          'set_slider_page3',array(
            'label'           =>__('Set slider Page 3','kidtheme'),
            'description'     =>__('Set slider Page 3','kidtheme'),
            'section'         =>'sec_slider',
            'type'            =>'dropdown-pages'
          )
          );
          // Field8-Slider button Text Number3
      $wp_customize->add_setting(
        'set_slider_button_text3',array(
          'type'              => 'theme_mod',
          'default'           =>'',
          'sanitize_callback' =>'sanitize_text_field'
        )
        );
        $wp_customize->add_control(
          'set_slider_button_text3',array(
            'label'           =>__('Button Text for Page 3','kidtheme'),
            'description'     =>__('Button Text for Page 3','kidtheme'),
            'section'         =>'sec_slider',
            'type'            =>'text'
          )
          );
          // Field 9-Slider button url Number3
      $wp_customize->add_setting(
        'set_slider_button_url3',array(
          'type'              => 'theme_mod',
          'default'           =>'',
          'sannitize_callback'=>'esc_url_raw'
        )
        );
        $wp_customize->add_control(
          'set_slider_button_url3',array(
            'label'           =>__('URL for Page 3','kidtheme'),
            'description'     =>__('URL for Page 3','kidtheme'),
            'section'         =>'sec_slider',
            'type'            =>'url'
          )
          );
          /*-------------------------------------------------------------------------------*/
      //Home Page Settings
      $wp_customize->add_section(
        'sec_home_page',array(
          'title'       =>__('Cài đặt trang chủ','kidtheme'),
          'description' =>__('Cài đặt trang chủ','kidtheme')
        )
        );

        // Sản phẩm bán chạy
        $wp_customize->add_setting(
          'set_best_selling_products_max_num',array(
            'type'              => 'theme_mod',
            'default'           =>'',
            'sanitize_callback' =>'absint'
          )
          );
          $wp_customize->add_control(
            'set_best_selling_products_max_num',array(
              'label'       =>__('Sản phẩm bán chạy','kidtheme'),
              'description' =>__('Số lượng sản phẩm','kidtheme'),
              'section'     =>'sec_home_page',
              'type'        =>'number'
            )
            );
            $wp_customize->add_setting(
              'set_best_selling_products_max_col',array(
                'type'              => 'theme_mod',
                'default'           =>'',
                'sanitize_callback' =>'absint'
              )
              );
            $wp_customize->add_control(
                'set_best_selling_products_max_col',array(
                  'label'           =>__('Sản phẩm bán chạy','kidtheme'),
                  'description'     =>__('Số lượng sản phẩm tối đa trên một hàng','kidtheme'),
                  'section'         =>'sec_home_page',
                  'type'            =>'number'
                )
                );
                 // Field1-Slider page Number1
        $wp_customize->add_setting(
          'set_new_arrivals_max_num',array(
            'type'              => 'theme_mod',
            'default'           =>'',
            'sanitize_callback' =>'absint'
          )
          );
          $wp_customize->add_control(
            'set_new_arrivals_max_num',array(
              'label'           =>__('New Arrivals Max Number','kidtheme'),
              'description'     =>__('New Arrivals Max Number','kidtheme'),
              'section'         =>'sec_home_page',
              'type'            =>'number'
            )
            );
            $wp_customize->add_setting(
              'set_new_arrivals_max_col',array(
                'type'              => 'theme_mod',
                'default'           =>'',
                'sanitize_callback' =>'absint'
              )
              );
            $wp_customize->add_control(
                'set_new_arrivals_max_col',array(
                  'label'           =>__('New Arrivals Max Columns','kidtheme'),
                  'description'     =>__('New Arrivals Max Columns','kidtheme'),
                  'section'         =>'sec_home_page',
                  'type'            =>'number'
                )
                );
            
            // Field1-Slider page Sale products
        $wp_customize->add_setting(
          'set_sale_products_max_num',array(
            'type'              => 'theme_mod',
            'default'           =>'',
            'sanitize_callback' =>'absint'
          )
          );
          $wp_customize->add_control(
            'set_sale_products_max_num',array(
              'label'       =>__('Sale Products Max Number','kidtheme'),
              'description' =>__('Sale Products Max Number','kidtheme'),
              'section'     =>'sec_home_page',
              'type'        =>'number'
            )
            );
            $wp_customize->add_setting(
              'set_sale_products_max_col',array(
                'type'              => 'theme_mod',
                'default'           =>'',
                'sanitize_callback' =>'absint'
              )
              );
            $wp_customize->add_control(
                'set_sale_products_max_col',array(
                  'label'           =>__('Sale Products Max Columns','kidtheme'),
                  'description'     =>__('Sale Products Max Columns','kidtheme'),
                  'section'         =>'sec_home_page',
                  'type'            =>'number'
                )
                );
             //Deal of the Week Checkbox
             $wp_customize->add_setting(
              'set_deal_show',array(
                'type'              => 'theme_mod',
                'default'           =>'',
                'sanitize_callback' =>'kidtheme_sanitize_checkbox'
              )
              );
            $wp_customize->add_control(
                'set_deal_show',array(
                  'label'           =>__('Bạn có muốn hiển thị quảng cáo giảm giá trong tuần','kidtheme'),
                  'section'         =>'sec_home_page',
                  'type'            =>'checkbox'
                )
                );
            //Deal of the Week Product ID
            $wp_customize->add_setting(
              'set_deal',array(
                'type'              => 'theme_mod',
                'default'           =>'',
                'sanitize_callback' =>'absint'
              )
              );
            $wp_customize->add_control(
                'set_deal',array(
                  'label'           =>__('ID sản phẩm giảm giá','kidtheme'),
                  'description'     =>__('Hiển thị sản phẩm Id','kidtheme'),
                  'section'         =>'sec_home_page',
                  'type'            =>'number'
                )
                );
             
}
add_action('customize_register','kidtheme_customizer');

function kidtheme_sanitize_checkbox($checked){
  return((isset($checked)&&true==$checked)?true:false);
}