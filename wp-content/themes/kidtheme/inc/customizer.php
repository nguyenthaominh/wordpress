<?php
/**
 * Kid Theme Customizer
 * @package KidTheme
 */
function kidtheme_customizer($wp_customize){
  //Copyright Section
  $wp_customize->add_section(
    'sec_copyright',array(
      'title' =>'Copyright Settings',
      'description'=>'Copyright Section'
    )

  );
    //Field 1-Copyright TextBox
    $wp_customize->add_setting(
      'set_copyright',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sannitize_callback'=>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_copyright',array(
          'label'=>'Copyright',
          'description'=>'Please, add your copy right information here',
          'section'=>'sec_copyright',
          'type'=>'text'
        )
        );
  /*-------------------------------------------------------------------------------*/
  //Slider Section
  $wp_customize->add_section(
    'sec_slider',array(
      'title' =>'Slider Settings',
      'description'=>'Slider Section'
    )
    );

    // Field1-Slider page Number1
    $wp_customize->add_setting(
      'set_slider_page1',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sanitize_callback'=>'absint'
      )
      );
      $wp_customize->add_control(
        'set_slider_page1',array(
          'label'=>'Set slider Page 1',
          'description'=>'Set slider Page 1',
          'section'=>'sec_slider',
          'type'=>'dropdown-pages'
        )
        );
         // Field2-Slider button Text Number1
    $wp_customize->add_setting(
      'set_slider_button_text1',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sanitize_callback'=>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_text1',array(
          'label'=>'Button Text for Page 1',
          'description'=>'Button Text for Page 1',
          'section'=>'sec_slider',
          'type'=>'text'
        )
        );
                // Field 3-Slider button url Number1
    $wp_customize->add_setting(
      'set_slider_button_url1',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sannitize_callback'=>'esc_url_raw'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_url1',array(
          'label'=>'URL for Page 1',
          'description'=>'URL for Page 1',
          'section'=>'sec_slider',
          'type'=>'url'
        )
        );
        // Field4-Slider page Number2
          $wp_customize->add_setting(
            'set_slider_page2',array(
              'type'=> 'theme_mod',
              'default'=>'',
              'sanitize_callback'=>'absint'
            )
            );
          $wp_customize->add_control(
            'set_slider_page2',array(
              'label'=>'Set slider Page 2',
              'description'=>'Set slider Page 2',
              'section'=>'sec_slider',
              'type'=>'dropdown-pages'
            )
            );
            
          // Field5-Slider button Text Number2
    $wp_customize->add_setting(
      'set_slider_button_text2',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sanitize_callback'=>'sanitize_text_field'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_text2',array(
          'label'=>'Button Text for Page 2',
          'description'=>'Button Text for Page 2',
          'section'=>'sec_slider',
          'type'=>'text'
        )
        );
         // Field 6-Slider button url Number2
    $wp_customize->add_setting(
      'set_slider_button_url2',array(
        'type'=> 'theme_mod',
        'default'=>'',
        'sannitize_callback'=>'esc_url_raw'
      )
      );
      $wp_customize->add_control(
        'set_slider_button_url2',array(
          'label'=>'URL for Page 2',
          'description'=>'URL for Page 2',
          'section'=>'sec_slider',
          'type'=>'url'
        )
        );
       // Field 7-Slider page Number3
       $wp_customize->add_setting(
        'set_slider_page3',array(
          'type'=> 'theme_mod',
          'default'=>'',
          'sanitize_callback'=>'absint'
        )
        );
        $wp_customize->add_control(
          'set_slider_page3',array(
            'label'=>'Set slider Page 3',
            'description'=>'Set slider Page 3',
            'section'=>'sec_slider',
            'type'=>'dropdown-pages'
          )
          );
          // Field8-Slider button Text Number3
      $wp_customize->add_setting(
        'set_slider_button_text3',array(
          'type'=> 'theme_mod',
          'default'=>'',
          'sanitize_callback'=>'sanitize_text_field'
        )
        );
        $wp_customize->add_control(
          'set_slider_button_text3',array(
            'label'=>'Button Text for Page 3',
            'description'=>'Button Text for Page 3',
            'section'=>'sec_slider',
            'type'=>'text'
          )
          );
          // Field 9-Slider button url Number3
      $wp_customize->add_setting(
        'set_slider_button_url3',array(
          'type'=> 'theme_mod',
          'default'=>'',
          'sannitize_callback'=>'esc_url_raw'
        )
        );
        $wp_customize->add_control(
          'set_slider_button_url3',array(
            'label'=>'URL for Page 3',
            'description'=>'URL for Page 3',
            'section'=>'sec_slider',
            'type'=>'url'
          )
          );
          /*-------------------------------------------------------------------------------*/
      //Home Page Settings
      $wp_customize->add_section(
        'sec_home_page',array(
          'title' =>'Home Page Products and Blog Setting',
          'description'=>'Home Page Section'
        )
        );

        // Field1-Slider page Number1
        $wp_customize->add_setting(
          'set_popular_max_num',array(
            'type'=> 'theme_mod',
            'default'=>'',
            'sanitize_callback'=>'absint'
          )
          );
          $wp_customize->add_control(
            'set_popular_max_num',array(
              'label'=>'Popular Products Max Number',
              'description'=>'Popular Products Max Number',
              'section'=>'sec_home_page',
              'type'=>'number'
            )
            );
            $wp_customize->add_setting(
              'set_popular_max_col',array(
                'type'=> 'theme_mod',
                'default'=>'',
                'sanitize_callback'=>'absint'
              )
              );
            $wp_customize->add_control(
                'set_popular_max_col',array(
                  'label'=>'Popular Products Max Columns',
                  'description'=>'Popular Products Max Columns',
                  'section'=>'sec_home_page',
                  'type'=>'number'
                )
                );
                 // Field1-Slider page Number1
        $wp_customize->add_setting(
          'set_new_arrivals_max_num',array(
            'type'=> 'theme_mod',
            'default'=>'',
            'sanitize_callback'=>'absint'
          )
          );
          $wp_customize->add_control(
            'set_new_arrivals_max_num',array(
              'label'=>'New Arrivals Max Number',
              'description'=>'New Arrivals Max Number',
              'section'=>'sec_home_page',
              'type'=>'number'
            )
            );
            $wp_customize->add_setting(
              'set_new_arrivals_max_col',array(
                'type'=> 'theme_mod',
                'default'=>'',
                'sanitize_callback'=>'absint'
              )
              );
            $wp_customize->add_control(
                'set_new_arrivals_max_col',array(
                  'label'=>'New Arrivals Max Columns',
                  'description'=>'New Arrivals Max Columns',
                  'section'=>'sec_home_page',
                  'type'=>'number'
                )
                );
             //Deal of the Week Checkbox
             $wp_customize->add_setting(
              'set_deal_show',array(
                'type'=> 'theme_mod',
                'default'=>'',
                'sanitize_callback'=>'kidtheme_sanitize_checkbox'
              )
              );
            $wp_customize->add_control(
                'set_deal_show',array(
                  'label'=>'Show Deal of the Weel?',
                  'section'=>'sec_home_page',
                  'type'=>'checkbox'
                )
                );
            //Deal of the Week Product ID
            $wp_customize->add_setting(
              'set_deal',array(
                'type'=> 'theme_mod',
                'default'=>'',
                'sanitize_callback'=>'absint'
              )
              );
            $wp_customize->add_control(
                'set_deal',array(
                  'label'=>'Deal of the Week Product ID',
                  'description'=>'Product ID to Display',
                  'section'=>'sec_home_page',
                  'type'=>'number'
                )
                );
             
}
add_action('customize_register','kidtheme_customizer');

function kidtheme_sanitize_checkbox($checked){
  return((isset($checked)&&true==$checked)?true:false);
}