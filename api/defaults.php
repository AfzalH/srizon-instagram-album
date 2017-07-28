<?php

function srizon_instagram_album_global_defaults() {
	return [
		'cache_time'         => 600,
		'load_more_text'     => 'Load More...',
		'lightbox'           => 'built_in',
		'lightbox_attribute' => 'class="lightbox" rel="lightbox"',
		'sorting'            => 'default',
		'max_image'          => 1000,
		'initial_load'       => 20,
		'load_more_load'     => 20,
		'layout'             => 'collage',
		'collage_row_height' => 200,
	];
}

function srizon_instagram_api_settings() {
	return [
		'access_token'  => get_option( 'srizon_instagram_access_token', false ),
		'oauth_url'     => 'https://api.instagram.com/oauth/authorize/',
		'client_id'     => '54da896cf80343ecb0e356ac5479d9ec',
		'redirect_uri'  => 'http://api.web-dorado.com/instagram/',
		'response_type' => 'token',
		'scope'         => 'public_content',
	];
	//$settings['client_id']     = '901f9880734f4a2fb06411c8889a51a6';
	//$settings['redirect_uri']  = 'https://srizon.com/instagram-api/';
}