<template>
    <section>
        <div class="img-container"><div class="img"></div></div>
        <div class="panel">
            <div class="wrapper">
                <h1>Desempacote a nossa história</h1>
                <div class="innerWrapper">
                    <p>Estamos há mais de uma década ao seu lado e da sua empresa para encontrar a embalagem que é o rosto do seu negócio.</p>
                    <p>Na Cartobox acreditamos que todas as empresas são diferentes e como tal precisam de embalagens que representem os seus negócios e que possam acondicionar o melhor possível os seus produtos, seja no armazenamento ou no transporte.</p>
                </div>
            </div>
        </div>
        <img src="@/assets/wave3.svg" alt="Wave" class="noSelect" id="wave">
    </section>
</template>

<script setup lang="ts">
    import { useMainStore } from '@/stores/main'
    const store = useMainStore()
</script>

<style scoped lang="scss">
    #wave {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
    }

    section {
        display: grid;
        grid-template-columns: 3fr 4fr;
        padding: 0;
        min-height: max(600px, calc(100vh - 90px));
        background: var(--firstColor);

        @media (max-width: 980px) {
            grid-template-columns: 1fr;

            &::before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                
                background-image: url('@/assets/hero.png');
                background-position: left;
                background-attachment: scroll;
                background-size: cover;
                opacity: .2;
                
            }
        }
    }

    .panel {
        display: flex;
        flex-direction: column;
        background: var(--firstColor);
        justify-content: center;
        align-items: center;
        padding: var(--padding);
        padding-block: var(--paddingTop);

        @media(max-width: 980px) {
            justify-content: flex-start;
            padding-bottom: 0;
            background: transparent;
        }
        
        p, h1 {
            color: #fff;
            font-weight: 300;
            line-height: 1.5;
            font-size: 1.2em;
            display: block;

            @media (max-width: 980px) {
                text-align: center;

                &.secondParagraph {
                    display: none;
                }
            }
        }

        p {
            margin-top: .5em;

            @media (max-width: 560px) {
                font-size: 1em;
            }
            
        }

        h1 {
            font-size: 2.7em;
            line-height: 1.3;
            font-weight: 500;
            margin-bottom: 1em;

            @media (max-width: 980px) {
                margin-bottom: 0;
                margin-top: 1em;
            }

            @media (max-width: 560px) {
                font-size: 2.3em;
            }
        }

        .wrapper {
            
            @media (max-width: 980px) {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: center;
                margin-bottom: 16em;

                .innerWrapper {
                    padding-top: 2em;
                }
            }
        }
        

        &::before {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(var(--navH) + 20px);
            background: var(--firstColor);

            transform: translateY(calc(var(--navH) * -1 - 10px));
        }

    }

    .img-container {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        
        @media (max-width: 980px) {
            display: none;
        }

        .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('@/assets/hero.png');
            background-position: left;
            background-attachment: scroll;
            background-size: cover;
        }
    }
</style>