// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Cartobox | Caixas que são a cara do seu negócio!",
            script: [
                
            ],
            link: [
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
    robots: {
        siteUrl: 'https://cartobox.pt/',
    },

    modules: ['@pinia/nuxt', '@formkit/nuxt', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
    
})
