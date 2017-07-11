<?php
function srizon_instagram_test() {
	return [ 'a', 'b', 'c' ];
}

function srizon_instagram_get_settings() {
	$settings                  = [ ];
	$settings['access_token']  = get_option( 'srizon_instagram_access_token', false );
	$settings['oauth_url']     = 'https://api.instagram.com/oauth/authorize/';
	$settings['client_id']     = '901f9880734f4a2fb06411c8889a51a6';
	$settings['redirect_uri']  = 'https://srizon.com/instagram-api/';
	$settings['response_type'] = 'token';
	$settings['scope']         = 'public_content';

	return $settings;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'srizon-instagram/v1', '/test/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_test',
	] );

	register_rest_route( 'srizon-instagram/v1', '/settings/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_get_settings',
	] );
} );

