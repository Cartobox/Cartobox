<template>
    <nav class="noselect">
        <div id="logo-area">
            <img src="@/static/logo.svg" alt="">
        </div>
        <div id="mobile-menu">
            <img src="@/static/menu-icon.svg" alt="" @click="toggleMobile">
        </div>
        <div id="nav-area" :class="{menuOpen: MobileIsActive}">
            <div class="pages">
                <span>Inicio</span>
                <span>Quem somos</span>
                <span>Produtos</span>
                <span>Contacto</span>
            </div>
        </div>
        
    </nav>
</template>

<script setup lang="ts">
    const MobileIsActive = ref(false);

    const toggleMobile = () => {
        MobileIsActive.value = !MobileIsActive.value;
    }

</script>

<style scoped lang="scss">

    nav {
        display: grid;
        grid-template-columns: auto 1fr;
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--navH);
        background: rgb(255, 255, 255);

        padding-inline: var(--padding);
        
        z-index: 100;
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

                span {
                    display: block;
                    font-size: 2rem;

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
            pointer-events: none;
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