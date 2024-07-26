<?php
/*
 * Plugin Name:       Simple TOC
 * Plugin URI:        #
 * Description:       Allow the automatic creation of a table of content in any pages or article.
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.2
 * Author:            Morgan Corroyer
 * Author URI:        https://www.linkedin.com/in/morgan-corroyer/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

 add_action('wp_enqueue_scripts', 'simple_toc_enqueue');
 function simple_toc_enqueue() {
     // Enregistrement et enfilement du style
     wp_register_style('simple_toc_style', plugin_dir_url(__FILE__) . 'styles/toc.css', array(), '1.0', 'all');
     wp_enqueue_style('simple_toc_style');
     
     // Enregistrement et enfilement du script
     wp_register_script('simple_toc_script', plugin_dir_url(__FILE__) . 'scripts/toc_creator.js', array('jquery'), '1.0', true);
     wp_enqueue_script('simple_toc_script');
 }
 