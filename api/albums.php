<?php
/**
 * @param string $username
 * @param string $access_token
 *
 * @return array|bool
 */
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
		$ret['api']    = $payload;

		return $ret;
	}
}

function srizon_instagram_get_album_index() {
	return SrizonInstaDB::GetAllAlbums();
}

/**
 * @param \WP_REST_Request $data
 *
 * @return mixed
 */
function srizon_instagram_save_hashtag_album( $data ) {
	$json_data = json_decode( $data->get_body() );
	$hashtag   = trim( $json_data->hashtag, " \t\n\r\0\x0B" );

	if ( strlen( $hashtag ) == 0 ) {
		return new WP_Error( 'hashtag_empty', 'Empty Hashtag. Please provide something valid', [ 'status' => 404 ] );
	}

	if ( trim( $json_data->title ) ) {
		$title = trim( $json_data->title );
	} else {
		$title = 'Photos with tag: ' . $hashtag;
	}

	$payload                    = [ ];
	$payload['title']           = $title;
	$payload['type']            = 'hashtag';
	$payload['userid']          = null;
	$payload['username']        = '';
	$payload['full_name']       = null;
	$payload['profile_picture'] = null;
	$payload['hashtag']         = $hashtag;

	SrizonInstaDB::SaveAlbum( $payload );

	$ret['result'] = 'saved';
	$ret['albums'] = srizon_instagram_get_album_index();
	$ret['api']    = $payload;

	return $ret;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'srizon-instagram/v1', '/useralbum/', [
		'methods'  => 'POST',
		'callback' => 'srizon_instagram_save_user_album',
	] );

	register_rest_route( 'srizon-instagram/v1', '/album/', [
		'methods'  => 'GET',
		'callback' => 'srizon_instagram_get_album_index',
	] );

	register_rest_route( 'srizon-instagram/v1', '/hashtagalbum/', [
		'methods'  => 'POST',
		'callback' => 'srizon_instagram_save_hashtag_album',
	] );
} );