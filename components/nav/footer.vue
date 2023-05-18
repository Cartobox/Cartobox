<template>
    <section id="footer">
        <img src="@/assets/wave2.svg" alt="" id="wave">
        <div id="grid">
            <div class="image">
                <img src="@/static/logo-white.svg" alt="">
                <p>Fazemos caixas que são mesmo a cara da sua empresa!</p>
            </div>
            <div class="item">
                <h4>contactos</h4>
                <p>244 545 380</p>
                <p class="small">(chamada fixa nacional)</p>
                <p>960 364 411</p>
                <p>comercial@cartobox.pt</p>
            </div>
            <div class="item">
                <h4>Morada</h4>
                <p>Rua da Forcada, <br/>
                    S/N, Calços <br/>
                    2445-712 Martingança
                </p>
                <p class="small top-4">(39.68440, -8.97201)</p>
            </div>
        </div>
        <div id="policy">
            <span class="link"><NuxtLink to="/termos-e-condicoes">Termos e condições</NuxtLink></span>
            <span class="link"><NuxtLink to="/politica-privacidade">Política de privacidade</NuxtLink></span>
            <span class="link"><NuxtLink to="/politica-cookies">Política de cookies</NuxtLink></span>
        </div>
        <div id="rodape">
            <div class="item">
                <span>Cartobox</span><span class="link"><NuxtLink to="https://www.livroreclamacoes.pt/" target="_blank">Livro de reclamações</NuxtLink></span>
            </div>
            <div class="item">
                <div class="wrapper">
                    <a href="https://www.facebook.com/profile.php?id=100092847426863" target="_blank"><img src="@/assets/icons/linkedIn.svg" alt="LinkedIn"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100092847426863" target="_blank"><img src="@/assets/icons/facebook.svg" alt="Facebook"/></a>
                    <a href="https://www.instagram.com/cartobox.lda/" target="_blank"><img src="@/assets/icons/instagram.svg" alt="Instagram"/></a>
                </div>
            </div>
        </div>
        <div id="portugal2020">
            
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    

    .top-4 {
        margin-top: .4em !important;
    }

    a {
        all: unset;
    }

    #footer {
        display: block;
        width: 100%;
        min-height: 40px;
        background: var(--firstColor);
        margin-top: 8em;
    }

    #rodape {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2em;
        color: #fff;

        @media (max-width: 650px) {
            margin-top: 4em;
            grid-template-columns: 1fr;
        }

        span {
            font-weight: 300;

            &:nth-child(2) {
                margin-left: 2em;
            }
        }

        .item:nth-child(1) {
            @media (max-width: 650px) {
                text-align: center;
                span {
                    text-align: center;
                    font-weight: 400;
                }
            }
        }

        .item:nth-child(2) {
            display: flex;
            flex-direction: row-reverse;

            @media (max-width: 650px) {
                flex-direction: row;
                justify-content: center;
                margin-top: 2em;
            }

            img {
                max-width: 25px;
                cursor: pointer;              
            }

            a:not(:last-child) {
                margin-right: 1em;
            }
        }
    }

    #wave {
        position: absolute;
        width: 100%;
        transform: translateY(-100%);
        top: 20px;
        left: 0;
    }

    #policy {
        display: block;
        margin-top: 3em;
        color: #fff;
        text-align: center;

       

        span {
            margin-left: 4em;
            cursor: pointer;
            font-weight: 300;
            

            &:first-of-type {
                margin-left: 0;
            }

            

            @media (max-width: 800px) {
                display: block;
                width: 100%;
                margin-left: 0;
                margin-top: 1em;
            }
        }
    }

    .link {
        transition: vaR(--transIn);
        cursor: pointer;
        &:hover {
            color: #eaeaea;
            transition: vaR(--transOut);
        }
    }

    #grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        @media (max-width: 950px) {
            grid-template-columns: 1fr;
            row-gap: 4em;
        }

        .image {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #fff;
            img {
                width: 40%;
                padding-right: 2em;

                @media (max-width: 1100px) {
                    width: 60%;
                }

                @media (max-width: 950px) {
                    width: 60%;
                    max-width: 160px;
                }
            }
        }

        .item {
            p {
                text-align: center;
                color: #fff;
                font-weight: 300;
                margin-top: .6em;
                font-size: 1.1em;

                &:first-of-type {
                    margin-top: .3em;
                }

                &.small {
                    font-size: .8em;
                    margin-top: 0;
                }
            }
        }

        p {
            font-size: 1.4em;
            font-weight: lighter;
        }

        h4 {
            text-align: center;
            color: #fff;
            font-weight: 500;
        }
    }
</style>