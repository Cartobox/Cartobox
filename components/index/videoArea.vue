<template>
    <section>
        <iframe v-if="config.public.videoURL.length > 0" src="https://www.youtube.com/embed/Y119ZaHIPp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="wrapper" v-else>

        </div>
    </section>
</template>

<script setup lang="ts">
    const config = useRuntimeConfig();
    const videoURL = config.public.videoURL;
</script>

<style scoped lang="scss">
    section {
        min-height: 100px;
        
        
        gap: 1em;
        padding-block: var(--padding);
    }

    iframe {
        display: block;
        margin: auto;
        width: 70%;
        aspect-ratio: 1.77777777778;

        @media (max-width: 800px) {
            width: 100%;
        }
    }
</style>