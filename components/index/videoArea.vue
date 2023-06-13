<template>
    <section>
        <iframe v-if="videoURL.length > 0" src="https://www.youtube.com/embed/Y119ZaHIPp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="wrapper" v-else>
            <div id="video-area">
                <h4>Estamos a desempacotar as câmeras</h4>
                <h3>Vídeo disponível em breve</h3>
                <img src="@/assets/recording.svg" alt="Imagem de jovem a começar a gravar um vídeo espetacular">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const config = useRuntimeConfig();
    const videoURL = config.public.videoURL;
    console.log(videoURL.length)
</script>

<style scoped lang="scss">
    section {
        min-height: 100px;
        
        
        gap: 1em;
        padding-block: var(--padding);
    }

    iframe, #video-area {
        display: block;
        margin: auto;
        width: 70%;
        aspect-ratio: 1.77777777778;

        @media (max-width: 800px) {
            width: 100%;
        }
    }

    #video-area {
        background: #A6EAFF;
        padding: 3em;

        @media (max-width: 800px) {
            padding: 1rem;
        }

        img {
            display: block;
            max-width: 50%;
            margin: auto;
            margin-top: 5em;

            @media (max-width: 800px) {
                width: 100%;
            }
        }

        border-radius: .7rem;
    }

    h2, h3, h4 {
        text-align: center;
        font-weight: 300;
    }

    h4 {
        @media (max-width: 800px) {
            font-size: 1.2rem;
        }
    }

    h3 {
        padding-top: .2em;
    }
</style>