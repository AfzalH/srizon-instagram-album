let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('assets/admin/js/app.jsx', 'admin/resources')
    .sass('assets/admin/sass/app.scss', 'admin/resources')
    .sass('assets/lib/srizon-materialize/sass/materialize.scss', 'admin/resources')
    .copy('assets/lib/srizon-materialize/js/bin/materialize.min.js', 'admin/resources/materialize.js')
    .copy('assets/lib/srizon-materialize/js/bin/materialize.min.js', 'site/resources/materialize.js')
    .copy('admin/resources/materialize.css', 'site/resources/materialize.css');
