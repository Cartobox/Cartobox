<template>
    <section>
        <div class="vantagem">
            <img src="@/assets/icons/fast_2.svg" alt="">
            <span>Rápido</span>
        </div>

        <div class="vantagem">
            <img src="@/assets/icons/plant_2.svg" alt="">
            <span>Sustentável</span>
        </div>

        <div class="vantagem">
            <img src="@/assets/icons/lupa_2.svg" alt="">
            <span>Personalizado</span>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    section {
        min-height: 100px;
        background: var(--firstColor);
        

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        padding-block: var(--padding);

        .vantagem {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            

            img {
                width: 20%;
                filter: brightness(0) invert(1);
                @media (max-width: 800px) {
                    width: 40%;
                }
                
            }

            span {
                display: block;
                width: 100%;
                text-align: center;
                color: #fff;
                padding-top: 1em;
                font-size: 1.6em;

                @media (max-width: 950px) {
                    font-size: 1.3em;
                }

                @media (max-width: 650px) {
                    font-size: 1em;
                }
            }
        }
    }
</style>