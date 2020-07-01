const mix = require('laravel-mix');

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

// version does not work in hmr mode
if (process.env.npm_lifecycle_event !== 'hot') {
    mix.version()
}

const path = require('path');
mix.webpackConfig({
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        proxy: {
            '*': 'http://localhost:8000'
        }
    }
})
.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css')
