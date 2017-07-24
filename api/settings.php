<?php

function srizon_instagram_disconnect_user() {
	delete_option( 'srizon_instagram_access_token' );
	delete_option( 'srizon_instagram_connected_user' );
}

function srizon_instagram_get_settings() {
	$settings                 = [ ];
	$settings['access_token'] = get_option( 'srizon_instagram_access_token', false );
	$settings['oauth_url']    = 'https://api.instagram.com/oauth/authorize/';
	//$settings['client_id']     = '901f9880734f4a2fb06411c8889a51a6';
	$settings['client_id'] = '54da896cf80343ecb0e356ac5479d9ec';
	//$settings['redirect_uri']  = 'https://srizon.com/instagram-api/';
	$settings['redirect_uri']  = 'http://api.web-dorado.com/instagram/';
	$settings['response_type'] = 'token';
	$settings['scope']         = 'public_content';
	$connected_user_object     = json_decode( get_option( 'srizon_instagram_connected_user', false ) );
	if ( $connected_user_object ) {
		$settings['connected_user'] = isset( $connected_user_object->data ) ? $connected_user_object->data : false;
	} else {
		$settings['connected_user'] = false;
	}
	
	return $settings;
}

add_action( 'rest_api_init', function () {

	register_rest_route( 'srizon-instagram/v1', '/settings/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_get_settings',
	] );

	register_rest_route( 'srizon-instagram/v1', '/disconnect-user/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_disconnect_user',
	] );
	
} );

