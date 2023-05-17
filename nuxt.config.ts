// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {src: "https://js.api.here.com/v3/3.1/mapsjs-core.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-service.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-ui.js"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css' },

            ],
        }
    },
    modules: ['@pinia/nuxt', '@formkit/nuxt'],
    
})
