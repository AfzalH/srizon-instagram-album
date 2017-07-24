<?php

class SrizonInstaDB{
	static function CreateDBTables() {
		global $wpdb;
		$t_albums = $wpdb->prefix . 'srzinst_albums';
		$sql      = '
CREATE TABLE ' . $t_albums . ' (
  id int(11) NOT NULL AUTO_INCREMENT,
  title text,
  albumtype text,
  userid text,
  username text,
  full_name text,
  profile_picture text,
  hashtag text,
  options text,
  PRIMARY KEY (id)
);
	
';
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

	static function SaveAlbum( $payload ) {
		global $wpdb;
		$table                   = $wpdb->prefix . 'srzinst_albums';
		$data['title']           = $payload['title'];
		$data['albumtype']       = $payload['type'];
		$data['userid']          = $payload['userid'];
		$data['username']        = $payload['username'];
		$data['full_name']       = $payload['full_name'];
		$data['profile_picture'] = $payload['profile_picture'];
		$data['hashtag']         = $payload['hashtag'];

		$wpdb->insert( $table, $data );

		return $wpdb->insert_id;
	}

	static function GetAllAlbums() {
		global $wpdb;
		$table  = $wpdb->prefix . 'srzinst_albums';
		$albums = $wpdb->get_results( "SELECT * FROM $table order by id desc" );

		return $albums;
	}
}