<template>
    <section>
        <div id="background" class="noselect">
            <img src="@/assets/hero-section-bg.svg" alt="" class="bg-pattern">
            <img src="@/assets/man-holding-boxes.png" alt="" class="hero">
        </div>
        <div id="info-container">
            <h1>Encaixe o seu negócio à sua medida</h1>
            <h4>Na cartobox procuramos responder às necessidades individuais de cada empresa, personalizando a impressão, dimensão e estrutura de cada embalagem.</h4>
        </div>
        <FormsButton>Encaixe a sua empresa</FormsButton>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    #background {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        left: 0;
        top: 0;

        .hero, .bg-pattern {
            position: absolute;
            display: block;
            bottom: 0;
            right: 2%;
            width: auto;
            height: 97%;

            @media (max-width: 560px) {
                height: 65%;
            }
        }

        .bg-pattern {
            right: 0;
            height: 100%;

            @media (max-width: 560px) {
                height: 80%;
            }
        }
    }

    #info-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 70%;
        margin-bottom: 1em;

        @media (max-width: 950px) {
            width: 100%;
        }
    }

    h1 {
        padding-top: 4rem;
        @media (max-width: 950px) {
            text-align: center;
            font-size: 3em;

            padding-top: 1rem;
        }

        @media (max-width: 650px) {
            font-size: 2.6em;
        }
    }

    h4 {
        margin-top: 1em;

        @media (max-width: 950px) {
            font-size: 1.5em;
        }

        @media (max-width: 650px) {
            font-size: 1.3em;
        }
    }

    section {
        display: flex;
        flex-direction: column;
    }

    #call-to-action {
        display: block;
        margin-top: auto;
        margin-bottom: 2em;
        font-size: 1.8rem;
        cursor: pointer;
        width: max-content;
        background: #00A3D4;
        color: #fff;
        padding-inline: .5em;
        padding-block: .2em;
        border-radius: .2em;

        transition: var(--transIn);

        &:hover {
            transition: var(--transOut);
            background: var(--secondColor);
        }

        @media (max-width: 650px) {
            margin-inline: auto;
            
        }
    }
</style>