<?php
function srizon_instagram_album_shortcode( $atts ) {
	if ( ! isset( $atts['id'] ) ) {
		return 'Invalid shortcode... ID missing';
	}

	return '<div class="srizon"><div class="srzinst" data-id="' . $atts['id'] . '"></div></div>';
}

add_shortcode( 'srzinst', 'srizon_instagram_album_shortcode' );

add_action( 'wp_enqueue_scripts', 'srizon_instagram_load_site_resources' );
function srizon_instagram_load_site_resources() {

	wp_enqueue_script( 'wp-api' );
	wp_enqueue_style( 'srizon-materialize', srizon_instagram_get_resource_url( 'site/resources/materialize.css' ), null, '1.0' );
	wp_enqueue_style( 'srizon-instagram-site', srizon_instagram_get_resource_url( 'site/resources/app.css' ), null, '1.0' );

	wp_enqueue_script( 'srizon-materialize', srizon_instagram_get_resource_url( 'site/resources/materialize.js' ), [ 'jquery' ], '1.0', true );
	//wp_enqueue_script( 'react', 'https://unpkg.com/react@15/dist/react.min.js', null, '15' );
	//wp_enqueue_script( 'react-dom', 'https://unpkg.com/react-dom@15/dist/react-dom.min.js', null, '15' );
	wp_enqueue_script( 'srizon-instagram-site', srizon_instagram_get_resource_url( 'site/resources/app.js' ), null, '1.0', true );
}
//wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', null, '1.0' );
//wp_enqueue_style( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', null, '1.0' );
