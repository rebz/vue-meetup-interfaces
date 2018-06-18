require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix.setPublicPath('public')

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .autoload({
        axios: "axios",
        vue: "Vue"
    })
    .extract([
        "vue",
        "vue-router"
    ])

if (mix.inProduction()) {
    mix.version()
    mix.disableNotifications()
} else {

    if (env && env.APP_DOMAIN) {

        mix.sourceMaps()
            .browserSync({
                open: 'external',
                host: env.APP_DOMAIN,
                proxy: env.APP_DOMAIN,
                files: [
                    "public/**/*.html",
                    "public/js/**/*.js",
                    "public/css/**/*.css"
                ]
            })

    } else {

        mix.sourceMaps()
            .browserSync({
                proxy: false,
                server: {
                    baseDir: 'public',
                    directory: false,
                    serveStaticOptions: {
                        extensions: ["html"]
                    }
                },
                files: [
                    "public/**/*.html",
                    "public/js/**/*.js",
                    "public/css/**/*.css"
                ]
            })
    }
}