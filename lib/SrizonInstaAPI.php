<?php
if ( ! class_exists( 'SrizonInstaAPI' ) ) {
	class SrizonInstaAPI{
		static $prefix = 'https://api.instagram.com/v1/';

		static function getCacheOrAPI( $endpoint, $album_id, $direct_link = false ) {
			$url = $endpoint;
			if ( ! $direct_link ) {
				$url = self::buildURL( $endpoint );
			}
			$cache = SrizonInstaDB::getAPICache( $url );
			if ( $cache ) {
				return $cache;
			} else {
				$response = self::getAPI( $url, true );
				if ( ! is_wp_error( $response ) ) {
					SrizonInstaDB::updateAPICache( $url, $album_id, $response );
				}

				return $response;
			}
		}

		static function getAPI( $endpoint, $direct_link = false ) {
			$url = $endpoint;
			if ( ! $direct_link ) {
				$url = self::buildURL( $endpoint );
			}

			$response = wp_remote_get( $url, [ 'timeout' => 30 ] );
			if ( is_wp_error( $response ) ) {
				return new WP_Error( 'Getting Data Failed', $response->get_error_message(), [ 'status' => 500 ] );
			} else {
				return json_decode( $response['body'] );
			}
		}

		static function buildURL( $endpoint ) {
			$token = '?access_token=' . get_option( 'srizon_instagram_access_token', false );

			return self::$prefix . $endpoint . $token;
		}

		static function getAlbumData( $id ) {
			$album_opt = SrizonInstaDB::getAlbum( $id );
			if ( $album_opt->albumtype == 'user' ) {
				return self::getUserAlbumData( $album_opt->userid, $id );
			} else if ( $album_opt->albumtype == 'hashtag' ) {
				return self::getHashtagAlbumData( $album_opt->hashtag, $id );
			} else {
				return new WP_Error( 'wrong_album_type', 'Wrong Album Type', [ 'status' => 404 ] );
			}
		}

		static function getUserAlbumData( $userid, $id ) {
			$data = self::getCacheOrAPI( 'users/' . $userid . '/media/recent', $id );

			return $data;
		}

		static function getHashtagAlbumData( $hashtag, $id ) {
			return self::getCacheOrAPI( 'tags/' . $hashtag . '/media/recent', $id );
		}
	}
}