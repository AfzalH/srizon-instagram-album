<?php

add_action( 'admin_menu', 'srizon_instagram_admin_menu' );

function srizon_instagram_admin_menu() {
	$srizon_instagram_menu_hook = add_menu_page( __( 'Srizon Instagram', 'srizon-instagram-album' ), __( 'Srizon Instagram', 'srizon-instagram-album' ), 'edit_posts', 'SrizonInstagram', 'srizon_instagram_admin_page', srizon_instagram_get_resource_url( 'resources/images/instagram-icon.png' ) );

	add_action( "admin_print_scripts-{$srizon_instagram_menu_hook}", 'srizon_instagram_load_admin_resources' );
}

function srizon_instagram_load_admin_resources() {
	// add app.css and app.js here
	wp_enqueue_style( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.css' ), null, '1.0' );
	wp_enqueue_script( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.js' ), [ 'jquery' ], '1.0', true );
}

function srizon_instagram_admin_page() {
	// render admin
	echo '<h1>Hello World</h1>';
	echo '<div id="srizon-instagram-admin"></div>';
}