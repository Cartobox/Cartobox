// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'canonical',  href: 'https://cartobox.pt/' },
            ],
            meta: [
                { name: 'description', content: 'Na Cartobox somos especialistas em cartas de cartão feitas a pensar especificamente no seu negócio.' },
                { name: 'keywords', content: 'caixas,cartao,canelado,medida,negocio,caixas de cartao,impressao,quantidade' },
                { name: 'HandheldFriendly', content: 'true' },
            ],
            htmlAttrs: {
                lang: "pt"
            }
        }
    },

    sitemap: {
        siteUrl: 'https://cartobox.pt/',
    },
    robots: {
        siteUrl: 'https://cartobox.pt/',
    },

    modules: ['@pinia/nuxt', '@formkit/nuxt', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
    
})
