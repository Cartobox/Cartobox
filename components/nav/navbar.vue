<template>
    <div id="navContainer">
        <nav class="noselect" :class="{scrolled: scrolledDown}">
            <div id="logo-area">
                <img src="@/static/logo.svg" alt="" @click="navigateTo('/')">
            </div>
            <div id="mobile-menu">
                <img src="@/static/menu-icon.svg" alt="" @click="toggleMobile">
            </div>
            <div id="nav-area" :class="{menuOpen: MobileIsActive}">
                <div class="pages" @click="MobileIsActive = false">
                    <span><NuxtLink to="/">Inicio</NuxtLink></span>
                    <span><NuxtLink to="/sobrenos">Quem somos</NuxtLink></span>
                    <span><NuxtLink to="/#produtos">Produtos</NuxtLink></span>
                    <span @click="togglecontactform()">Contacto</span>
                </div>
            </div>
            
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { useMainStore } from '@/stores/main'
    const store = useMainStore()



    const togglecontactform = () => store.showContactModal = true;

    const MobileIsActive = ref(false);

    const toggleMobile = () => {
        MobileIsActive.value = !MobileIsActive.value;
    }

    const scrolledDown = ref(false);

    onMounted(() => {
        document.addEventListener("scroll", () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (scroll > 50) scrolledDown.value = true;
            else scrolledDown.value = false;
        })
    })

    const route = useRoute()

</script>

<style scoped lang="scss">
    #navContainer {
        height: 90px;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
    }

    a {
        all: unset;
    }


    nav {
        display: grid;
        grid-template-columns: auto 1fr;
        
        width: 100%;
        height: var(--navH);
        background: rgb(255, 255, 255);

        padding-inline: var(--padding);
        transition: var(--transIn);
        
        &.scrolled {
            --navH: 70px;
            -webkit-box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);
            -moz-box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);
            box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);
        }
    }

    #nav-area, #logo-area, #mobile-menu {
        display: block;
        width: 100%;
        height: var(--navH);
    }

    #nav-area {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        span {
            display: inline-block;
            margin-left: 1.5em;
            cursor: pointer;
            transition: var(--transOut);
            font-size: 1.3rem;

            &.active {
                color: var(--secondColor);
                font-weight: 600;
            }

            &:not(.active):hover {
                color: var(--secondColor); 
                transition: var(--transIn);
            }
        }

        @media (max-width: 780px) {
            transform: scaleY(0);
            transform-origin: center top;
            transition: var(--transIn);

            padding-bottom: 1em;

            &.menuOpen {
                display: block;
                position: absolute;
                width: 100%;
                top: var(--navH);
                left: 0;
                background: rgb(255, 255, 255);
                height: auto;

                transform: scaleY(1);
                transition: var(--transOut);

                -webkit-box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);
                -moz-box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);
                box-shadow: 0px 10px 27px -12px rgba(0,0,0,0.38);

                span {
                    display: block;
                    font-size: 2rem;
                    width: 100%;

                    a {
                        display: inline-block;
                        width: 100%;
                    }

                    margin-top: .7em;
                }
            }
        }
    }

    #logo-area, #mobile-menu {
        display: flex;
        align-items: center;

        img {
            display: block;
            width: auto;
            height: 90%;
           
            cursor: pointer;
        }
    }

    #mobile-menu {
        flex-direction: row-reverse;
        align-items: center;
        display: none;

        @media (max-width: 780px) {
            display: flex;
        }

        img {
            height: 30%;
            margin: 0;
            pointer-events: all;
        }
    }
</style>