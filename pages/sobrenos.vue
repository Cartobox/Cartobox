<template>
    <div>
        <SobreHeroSection></SobreHeroSection>
        <SobreClientes></SobreClientes>
        <SobreAmbiente></SobreAmbiente>
        <SobreLastmessage></SobreLastmessage>
        <SobreCalltoAction></SobreCalltoAction>
    </div>
</template>

<script setup lang="ts">
    useSeoMeta({
        ogTitle: 'Na Cartobox fazemos as melhores caixas em cartão para o seu negócio',
        description: 'Somos especialistas em todo tipo de caixas de cartão canelado, produzindo caixas que são a cara do seu negócio, com as suas medidas e impressão customizados!',
        ogDescription: 'Somos especialistas em todo tipo de caixas de cartão canelado, produzindo caixas que são a cara do seu negócio, com as suas medidas e impressão customizados!',
        ogImage: '/ogImage.png',
        twitterCard: 'summary_large_image',
        ogUrl: 'https://cartobox.pt/',
        ogType: "website",
        ogLocale: "pt_PT"
    });

 
</script>

<style lang="scss">
    p {
        font-size: 1.2em;
        font-weight: 300;

        @media (max-width: 700px) {
            font-size: 1em;
        }
    }
</style>