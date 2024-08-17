// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            strapiUrl: "http://localhost:1337",
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            bodyAttrs: {
                class: ['relative text-white scroll-smooth antialiased font-sans']
            },
            title: 'Strapi Pops Example',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Strapi Pops Example'}
            ],
            link: [
                {rel: "icon", type: "image/png", href: "/favicon.ico"}
            ],
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/strapi", "@nuxt/image"],
    strapi: {
        version: 'v4',
        prefix: '/api'
    },
    image: {
        dir: 'assets/images'
    }
})
