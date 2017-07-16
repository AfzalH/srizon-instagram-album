<?php

class SrizonInstaDB{
	static function CreateDBTables() {
		global $wpdb;
		$t_albums = $wpdb->prefix . 'srzinst_albums';
		$sql      = '
CREATE TABLE ' . $t_albums . ' (
  id int(11) NOT NULL AUTO_INCREMENT,
  title text CHARACTER SET utf8,
  albumtype text CHARACTER SET utf8,
  userid text CHARACTER SET utf8,
  username text CHARACTER SET utf8,
  full_name text CHARACTER SET utf8,
  profile_picture text CHARACTER SET utf8,
  hashtag text CHARACTER SET utf8,
  options text CHARACTER SET utf8,
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
}