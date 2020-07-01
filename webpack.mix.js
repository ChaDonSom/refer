const mix = require('laravel-mix');

// version does not work in hmr mode
if (process.env.npm_lifecycle_event !== 'hot') {
    mix.version()
}

mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        public: 'penguin.linux.test:8080',
        contentBase: path.resolve(__dirname, 'public'),
        proxy: {
            '*': 'http://localhost:8000'
        }
    },
    resolve: {
        alias: {
            'sass':   path.resolve(__dirname, 'resources/sass'),
            '@js':    path.resolve(__dirname, 'resources/js'),
            '@comps': path.resolve(__dirname, 'resources/js/components'),
            '@store': path.resolve(__dirname, 'resources/js/store'),
            '@route': path.resolve(__dirname, 'resources/js/route'),
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
        }
    }
})
.js('resources/js/app.js', 'public/js')
// .sass('resources/sass/app.scss', 'public/css')
