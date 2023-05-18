<template>
    <div>
        <section id="title">
            <h2>Quem somos</h2>
        </section>
        <section>
            <div id="picture-area">
                <img src="@/assets/image_1.png" alt="">
            </div>
            <div class="text-section">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, minus alias provident magni enim aliquam! Explicabo, ab dicta. Sapiente error ipsum soluta dolorum dolore quod placeat quae consequatur a, sint, aut unde pariatur, dignissimos temporibus esse molestias. Porro inventore, voluptas fugit neque explicabo repellendus consequatur deleniti totam excepturi optio a doloremque non eum culpa ullam itaque sit, enim impedit hic possimus. Laudantium eaque odio quod veniam aperiam. Neque consequuntur cum sint sequi est officia laudantium dicta, asperiores iste reprehenderit. Veniam quod saepe unde voluptatem? Provident eveniet harum dolorem! Facere, at similique! Dolore aliquam labore consequatur cupiditate, quae quam quis quia a possimus cumque nulla tempora obcaecati blanditiis laborum amet numquam minus modi voluptatibus rem magnam accusamus facilis dolores sunt culpa? Quidem eligendi odit ratione unde, hic quas enim in quis aut eius fugiat officia atque distinctio temporibus aspernatur deleniti at illo! Quis nulla culpa et officia ducimus. Quo quos, odio est, ipsum ex corrupti voluptatibus quia excepturi iure recusandae praesentium illo dignissimos amet officia, vitae itaque beatae. Quod, harum nihil aut vitae pariatur quas soluta quibusdam ratione voluptates enim cupiditate quisquam ipsa, sequi dolor quia voluptatem magnam quasi iste sapiente iure neque? Atque, ipsum eaque magnam nostrum ratione corporis quis?
            </div>
        </section>
        <section id="missao">
            <div class="left">
                <h2>A nossa missão</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora praesentium inventore laboriosam fugit amet modi doloribus velit repellendus voluptate tenetur? Dignissimos nemo ad corporis amet. Obcaecati nobis harum error voluptates similique, eum natus. Laudantium quidem, libero odit commodi quae dicta repellat aperiam? Dolores odit aspernatur excepturi. Tempore adipisci porro assumenda totam eveniet? Perferendis aliquam incidunt pariatur fugit. Maxime modi blanditiis, impedit doloribus beatae numquam aliquam accusamus! Quod deleniti sapiente reprehenderit commodi libero minus dolor repellendus quam laboriosam! Necessitatibus, nostrum reprehenderit!</p>
            </div>
            <div class="right">
                <div class="wrapper">
                    <img src="@/assets/image_2.png" alt=""> 
                </div>
            </div>
        </section>
        <section id="equipa">
            <h2>Conheça os nossos talentos</h2>

            <div class="pessoas">
                <div class="item" v-for="i in 3">
                    <img src="@/assets/placeholder.png" alt="">
                    <span>Nome da pessoa</span>
                    <span>Cargo</span>
                </div>
            </div>
        </section>
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
    })
</script>

<style scoped lang="scss">
    //equipa
    #equipa {
        margin-top: 3em;
        

        .pessoas {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 3em;

            @media (max-width: 850px) {
                grid-template-columns: 1fr;
                row-gap: 4em;
            }
        }

        h2 {
            text-align: center;
            color: var(--secondColor);
        }

        .item {
            display: block;
            width: 100%;
            height: auto;
            text-align: center;

            span {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 1.5em;
                padding-top: .3em;

                &:first-of-type {
                    font-weight: 600;
                }

                &:not(:first-of-type) {
                    padding: 0;
                    font-size: 1.2em;
                }
            }

            img {
                display: block;
                max-width: 200px;
                margin-inline: auto;
                border-radius: 20px;

                @media (max-width: 500px) {
                    max-width: 300px;
                }
            }
            
        }
    }

    //Missao
    #missao {
        display: grid;
        grid-template-columns: 4fr 3fr;
        margin-top: 2em;
        padding-inline: 0;
        padding-left: var(--padding);
        column-gap: 8em;
        row-gap: 3.5em;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        h2 {
            text-align: left;
            color: var(--secondColor);
        }
        
        .left {
            padding-right: var(--padding);
        }

        .right {
            display: flex;
            flex-direction: row-reverse;
            
            img {
                width: 100%;     
            }

            .wrapper {
                width: 100%;
                height: 100%;
                overflow: hidden;
                
            }

            &::before {
                content: '';
                position: absolute;
                height: 80%;
                aspect-ratio: 1 / 1;
                background: var(--firstColor);
                top: 0;
                left: 0;
                transform-origin: center;
                border-radius: 2em;
                transform: translateX(-10%) translateY(0);
                rotate: -10deg;
            }
        }
    }
    
    ////First area
    section {
        min-height: auto;
    }

    #title {
        background: var(--firstColor);
        min-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        text-align: center;
        color: #fff;
    }

    #picture-area {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 60vw;
        margin-inline: auto;
        height: calc(22vw);

        @media (max-width: 1000px) {
            height: calc(18vw);
        }

        @media (max-width: 620px) {
            height: calc(15vw);
            width: 80vw;
        }

        img {
            width: 100%;
            display: block;
            margin-inline: auto;
            transform: translateY(-100px);
        }
    }
</style>