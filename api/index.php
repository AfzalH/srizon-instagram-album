<?php
function srizon_instagram_test() {
	return [ 'a', 'b', 'c' ];
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

	//https://api.instagram.com/oauth/authorize/?client_id=54da896cf80343ecb0e356ac5479d9ec&scope=basic+public_content&redirect_uri=http://api.web-dorado.com/instagram/?return_url=http%3A%2F%2Fwpp.dev%2Fwp-admin%2Fadmin.php%3Fpage%3Dwdi_settings&response_type=token
	return $settings;
}

function srizon_instagram_disconnect_user() {
	delete_option( 'srizon_instagram_access_token' );
	delete_option( 'srizon_instagram_connected_user' );
}

function srizon_instagram_username_to_id( $username, $access_token ) {

	// try direct
	$response = wp_remote_get( 'https://www.instagram.com/' . $username . '/?__a=1' );
	if ( $response['response']['code'] == 200 ) {
		$json = json_decode( $response['body'] );

		return $json->user;
	} else {
		// try search
		$response = wp_remote_get( 'https://api.instagram.com/v1/users/search?q=' . $username . '&access_token=' . $access_token );
		if ( $response['response']['code'] == 200 ) {
			$json = json_decode( $response['body'] );

			return $json->data;
		}
	}

	return false;
}

/**
 * @param \WP_REST_Request $data
 */

function srizon_instagram_save_user_album( $data ) {
	$access_token = get_option( 'srizon_instagram_access_token', false );
	$json_data    = json_decode( $data->get_body() );
	$user         = srizon_instagram_username_to_id( $json_data->username, $access_token );

	//return $user_id;
	if ( is_array( $user ) ) {
		if ( count( $user ) ) {
			$ret['result'] = 'selection';
			$ret['users']  = $user;

			return $ret;
		} else {
			return new WP_Error( 'user_not_found', 'User Not Found', [ 'status' => 404 ] );
		}
	} else {
		if ( ! $user->id ) {
			return new WP_Error( 'user_not_found', 'User Not Found', [ 'status' => 404 ] );
		}
		if ( trim( $json_data->title ) ) {
			$title = trim( $json_data->title );
		} else if ( trim( $user->full_name ) ) {
			$title = 'Photos of ' . $user->full_name;
		} else {
			$title = 'Photos of ' . $user->username;
		}

		$payload                    = [ ];
		$payload['title']           = $title;
		$payload['type']            = 'user';
		$payload['userid']          = $user->id;
		$payload['username']        = $user->username;
		$payload['full_name']       = $user->full_name;
		$payload['profile_picture'] = $user->profile_pic_url;
		$payload['hashtag']         = '';

		SrizonInstaDB::SaveAlbum( $payload );

		$ret['result'] = 'saved';
		$ret['albums'] = srizon_instagram_get_album_index();

		return $ret;
	}
}

function srizon_instagram_get_album_index() {
	return SrizonInstaDB::GetAllAlbums();
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

	register_rest_route( 'srizon-instagram/v1', '/disconnect-user/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_disconnect_user',
	] );

	register_rest_route( 'srizon-instagram/v1', '/useralbum/', [
		'methods'  => 'POST',
		'callback' => 'srizon_instagram_save_user_album',
	] );
	register_rest_route( 'srizon-instagram/v1', '/album/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_get_album_index',
	] );
} );

