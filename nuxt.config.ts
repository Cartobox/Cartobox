// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        baseURL: process.env.NUXT_BASE_URL + "/assets/ogImage.png",
        public: {
            videoURL: process.env.VIDEOLINK,
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Cartobox | Caixas que são a cara do seu negócio!",
            link: [
                { rel: 'apple-touch-icon', href: '/apple-touch-57.png' },
                { rel: 'apple-touch-icon', sizes: '72x72' ,href: '/apple-touch-72.png' },
                { rel: 'apple-touch-icon', sizes: '114x114' ,href: '/apple-touch-114.png' },
                { rel: 'apple-touch-icon', sizes: '144x144' ,href: '/apple-touch-144.png' },
                { rel: 'apple-touch-startup-image', href: '/apple-touch-144.png' },
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'canonical',  href: 'https://cartobox.pt/' },
            ],
            script: [
                {src: "https://www.google.com/recaptcha/api.js?render=6LclXzYmAAAAACni1BfBUnWJXg4Eb1b2KZ-8f4V5" }
            ],
            meta: [
                { name: 'description', content: 'Na Cartobox somos especialistas em cartas de cartão feitas a pensar especificamente no seu negócio.' },
                { name: 'keywords', content: 'caixas,cartao,canelado,medida,negocio,caixas de cartao,impressao,quantidade,cartobox,negócio' },
                { name: 'HandheldFriendly', content: 'true' },
                { name: 'handheld-friendly', content: 'true' },
                { name: 'google-site-verification', content: '-7Dl-O-m2Tbyl4LtAJzxhSgSqOggEi_yV3aHterWWCM' },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content:'https://imgdb.net/storage/uploads/f33e3f78b1c8e440ff9bea6e7520ebb59a979c77f171e5e6ac83ef0d63c919b7.png',
                },
                { name: 'thumbnail', content: 'https://imgdb.net/storage/uploads/71349f7042bbca014dd01d3b3c7982eba5bc3c2aefc017bb0d8ff27183605fb7.png' },
            ],
            htmlAttrs: {
                lang: "pt"
            },
            
        }
    },

    sitemap: {
        siteUrl: 'https://cartobox.pt/',
    },
    robots: {
        siteUrl: 'https://cartobox.pt/',
    },
    gtag: {
        id: process.env.ANALYTICSID
    },


    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
                '/sobrenos'
            ]
        }
    },
    formkit: {
        defaultConfig: true,
        configFile: './formkit.config.ts',
        // ^ this is now a full config replacement, not override.
    },

    modules: [
        '@pinia/nuxt', 
        '@formkit/nuxt', 
        'nuxt-simple-sitemap', 
        'nuxt-simple-robots', 
        'nuxt-gtag'
    ],
    
})
