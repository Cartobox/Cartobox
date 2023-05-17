// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Cartobox | Caixas que são a cara do seu negócio!",
            script: [
                {src: "https://js.api.here.com/v3/3.1/mapsjs-core.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-service.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-ui.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css' },
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ],
            meta: [
                { name: 'description', content: 'Na Cartobox somos especialistas em cartas de cartão feitas a pensar especificamente no seu negócio.' },
                { name: 'keywords', content: 'caixas,cartao,canelado,medida,negocio,caixas de cartao,impressao,quantidade' },
            ]
        }
    },

    sitemap: {
        siteUrl: 'https://cartobox.pt/',
    },

    modules: ['@pinia/nuxt', '@formkit/nuxt', 'nuxt-simple-sitemap', '@nuxtjs/robots'],
    
})
