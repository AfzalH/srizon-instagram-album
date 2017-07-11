<?php
/*
Plugin Name: Srizon Instagram Album
Plugin URI: https://www.srizon.com/srizon-instagram-album
Description: This Plugin is designed to show your Instagram photos into your WordPress site. You can also show public photos from other instagram users.
Text Domain: srizon-instagram-album
Domain Path: /languages
Version: 1.0
Author: Afzal
Author URI: https://www.srizon.com/contact
*/

function srizon_instagram_album_load_textdomain() {
	load_plugin_textdomain( 'srizon-instagram-album', false, basename( dirname( __FILE__ ) ) . '/languages/' );
}

add_action( 'plugins_loaded', 'srizon_instagram_album_load_textdomain' );

// backend files
require_once 'api/index.php';
if ( is_admin() ) {
	require_once 'admin/index.php';
}

function srizon_instagram_get_resource_url( $relativePath ) {
	return plugins_url( $relativePath, plugin_basename( __FILE__ ) );
}


