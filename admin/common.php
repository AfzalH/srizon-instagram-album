<?php

add_action( 'admin_menu', 'srizon_instagram_admin_menu' );

function srizon_instagram_admin_menu() {
	$srizon_instagram_menu_hook = add_menu_page( __( 'Srizon Instagram', 'srizon-instagram-album' ), __( 'Srizon Instagram', 'srizon-instagram-album' ), 'edit_posts', 'SrizonInstagram', 'srizon_instagram_admin_page', srizon_instagram_get_resource_url( 'resources/images/instagram-icon.png' ) );

	add_action( "admin_print_scripts-{$srizon_instagram_menu_hook}", 'srizon_instagram_load_admin_resources' );
}

function srizon_instagram_load_admin_resources() {
	// add app.css and app.js here
	wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', null, '1.0' );
	wp_enqueue_style( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', null, '1.0' );
	wp_enqueue_style( 'srizon-materialize', srizon_instagram_get_resource_url( 'admin/resources/materialize.css' ), null, '1.0' );
	wp_enqueue_script( 'srizon-materialize', srizon_instagram_get_resource_url( 'admin/resources/materialize.js' ), [ 'jquery' ], '1.0', true );
	wp_enqueue_style( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.css' ), null, '1.0' );
	wp_enqueue_script( 'srizon-instagram-admin', srizon_instagram_get_resource_url( 'admin/resources/app.js' ), null, '1.0', true );
}

function srizon_instagram_admin_page() {
	// render admin
	?>
	<div class="srizon" style="padding: 10px">
		<div class="row">
			<div class="col s12">
				<h1>Hello World</h1>
				<div id="srizon-instagram-admin"></div>
			</div>
		</div>

		<div class="row"></div>

		<div class="row">
			<div class="col s12">
				<div>
					<a class="waves-effect waves-light btn">button</a>
					<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
					<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<div class="chip">
					<img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person">
					Jane Doe
				</div>
			</div>
		</div>

		<form class="col s12">
			<div class="row">
				<div class="input-field col s6">
					<input placeholder="Placeholder" id="first_name" type="text" class="validate">
					<label for="first_name">First Name</label>
				</div>
				<div class="input-field col s6">
					<input id="last_name" type="text" class="validate">
					<label for="last_name">Last Name</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input disabled value="I am not editable" id="disabled" type="text" class="validate">
					<label for="disabled">Disabled</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input id="password" type="password" class="validate">
					<label for="password">Password</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input id="email" type="email" class="validate">
					<label for="email">Email</label>
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					This is an inline input field:
					<div class="input-field inline">
						<input id="email" type="email" class="validate">
						<label for="email" data-error="wrong" data-success="right">Email</label>
					</div>
				</div>
			</div>
		</form>
		<div class="row">
			<div class="col s12">
				<div class="collection">
					<a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
					<a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
					<a href="#!" class="collection-item">Alan</a>
					<a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
				</div>
			</div>
		</div>

	<?php
}