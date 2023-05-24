<template>
    <div id="button" @click="navigateTo('/#produtos')">
        Conheça os nossos produtos
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang=scss>
    #button {
        display: block;
        background: var(--firstColor);
        margin-inline: auto;
        width: max-content;
        color: #fff;
        cursor: pointer;
        font-size: 2.2em;
        border-radius: .2em;
        padding: .2em;
        padding-inline: .5em;
        transition: var(--transIn);
        text-align: center;

        @media (max-width: 800px) {
            font-size: 1.8em;
        }

        @media (max-width: 700px) {
            margin-top: 3em;
        }

        @media (max-width: 700px) {
            font-size: 1.4em;
        }

        @media (max-width: 500px) {
            max-width: 80%;
            
        }

        &:hover {
            background: var(--secondColor);
            transition: var(--transOut);
        }
    }
</style>