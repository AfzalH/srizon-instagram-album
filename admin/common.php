<?php

add_action( 'admin_menu', 'srizon_instagram_admin_menu' );
add_action( 'admin_init', 'srizon_save_access_token' );

function srizon_save_access_token() {
	if ( isset( $_REQUEST['access_token'] ) ) {
		update_option( 'srizon_instagram_access_token', $_REQUEST['access_token'] );
		$user_self = wp_remote_get( 'https://api.instagram.com/v1/users/self/?access_token=' . $_REQUEST['access_token'] );
		update_option( 'srizon_instagram_connected_user', isset( $user_self['body'] ) ? $user_self['body'] : false );
	}
}

function srizon_instagram_admin_menu() {
	$srizon_instagram_menu_hook = add_menu_page( __( 'Srizon Instagram', 'srizon-instagram-album' ), __( 'Srizon Instagram', 'srizon-instagram-album' ), 'edit_posts', 'SrizonInstagram', 'srizon_instagram_admin_page', srizon_instagram_get_resource_url( 'resources/images/instagram-icon.png' ) );

	add_action( "admin_print_scripts-{$srizon_instagram_menu_hook}", 'srizon_instagram_load_admin_resources' );
}

function srizon_instagram_load_admin_resources() {

	wp_enqueue_script( 'wp-api' );
	// add app.css and app.js here
	wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', null, '1.0' );
	wp_enqueue_style( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', null, '1.0' );
	wp_enqueue_style( 'srizon-materialize', srizon_instagram_get_resource_url( 'admin/resources/materialize.css' ), null, '1.0' );
	wp_enqueue_script( 'srizon-materialize', srizon_instagram_get_resource_url( 'admin/resources/materialize.js' ), [ 'jquery' ], '1.0', true );
	wp_enqueue_style( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.css' ), null, '1.0' );
	wp_enqueue_script( 'react', 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.1/react.min.js', null, '1.0' );
	wp_enqueue_script( 'react-dom', 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.1/react-dom.min.js', null, '1.0' );
	wp_enqueue_script( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.js' ), null, '1.0', true );
}

function srizon_instagram_admin_page() {
	// render admin
	?>
	<div class="srizon">
		<div id="srizon-instagram-admin"></div>
	</div>

	<?php
}