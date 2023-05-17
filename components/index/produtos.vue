<template>
    <section ref="sec" id="produtos">
        <img src="@/assets/wave1.svg" alt="" id="bottomTransition">
        <h2>Conheça os nossos produtos</h2>


        <div id="carrousel" class="noselect" ref="carrouselContainer">
            <div class="item-container" ref="itemCont">
                <div class="item" v-for="i in 8">
                    <img src="@/assets/box.png" alt="">
                </div>
            </div>
            <div class="carrouselBTN noSelect" @click="offsetCarrousel(250)"></div>
            <div class="carrouselBTN next noSelect" @click="offsetCarrousel(-250)"></div>
        </div>

        <FormsButton id="calltoaction">Obtenha uma solução à sua medida</FormsButton>
    </section>
</template>

<script setup lang="ts">
    import { useMainStore } from '@/stores/main'
    const store = useMainStore()


    let scrolled = ref(0)

    let carrouselContainer = ref(null);

    const carrouselSettings = {
        scrollWidth: 0,
        width: 0,
        offset: 50,
        maxWidth: 0
    }

    ///Creates envent listeners
    onMounted(() => {
        if(document.contains(carrouselContainer.value)) {
            const container = carrouselContainer.value as unknown as HTMLElement;

            container.addEventListener("pointerdown", (e) => {
                console.log("down")
                carrouselSettings.scrollWidth = container.scrollWidth - container.offsetWidth;
                carrouselSettings.width = container.offsetWidth;
                
                window.addEventListener("pointermove", handleMove);
                window.addEventListener("pointerup", () => {
                    console.log("up")
                    window.removeEventListener("pointermove", handleMove);
                    fixOffset();
                }, {once: true})
            })
        }
    })

    const itemCont = ref(null);

    const handleMove = (e: PointerEvent) => {
        console.log("move")
        scrolled.value += e.movementX;

        const container = carrouselContainer.value as unknown as HTMLElement;
        carrouselSettings.scrollWidth = container.scrollWidth - container.offsetWidth;
        carrouselSettings.width = container.offsetWidth;

        const itemContainer = itemCont.value as unknown as HTMLElement;

        carrouselSettings.maxWidth = (itemContainer.scrollWidth - itemContainer.offsetWidth) * -1;

        if(scrolled.value > carrouselSettings.offset) {
            scrolled.value = carrouselSettings.offset
        }

        if (carrouselSettings.scrollWidth <= 0) {

            if(scrolled.value * -1 > itemContainer.scrollWidth - itemContainer.offsetWidth + carrouselSettings.offset) {
                scrolled.value = (itemContainer.scrollWidth - itemContainer.offsetWidth) * -1 - 50
            }
        }
    }

    const fixOffset = () => {
        if(!(scrolled.value > 0 || carrouselSettings.scrollWidth <= 0) ) return

        const itemContainer = itemCont.value as unknown as HTMLElement;

        let endPos = 0;
        const timing = 100;

        if(carrouselSettings.scrollWidth <= 0) endPos = carrouselSettings.maxWidth;

        const animationKeyframes = [
                { transform: `translateX(${endPos}px)` },
        ];

        setTimeout(function(){
            scrolled.value = endPos;
        }, timing - 25); //Time before execution

        itemContainer.animate(animationKeyframes, {
            iterations: 1,
            duration: timing,
        });
        
        
    }

    const offsetCarrousel = (offset: number) => {
        const itemContainer = itemCont.value as unknown as HTMLElement;

        let endPos = scrolled.value + offset;
        const timing = 100;


        if (endPos > 0) endPos = 0;
        if (endPos < carrouselSettings.maxWidth) endPos = carrouselSettings.maxWidth;
            
        const animationKeyframes = [
            { transform: `translateX(${endPos}px)` },
        ];

        setTimeout(function(){
            scrolled.value = endPos;
        }, timing - 25); //Time before execution

        itemContainer.animate(animationKeyframes, {
            iterations: 1,
            duration: timing,
        });


        
    }

</script>

<style scoped lang="scss">
    #calltoaction {
        margin-inline: auto;
        margin-top: 2em;
    }

    #carrousel {
        overflow: hidden;
        width: 100%;
        min-height: 200px;
        margin-top: 2em;
        padding-block: .5em;
        touch-action: none;

        .item-container {
            --scrolled: v-bind(scrolled);

            display: flex;
            flex-direction: row;

            transform: translateX(calc(var(--scrolled) * 1px));

            .item {
                display: block;
                --w: 250px;
                flex-grow: 0;
                flex-shrink: 0;
                width: var(--w);
                height: calc(var(--w) * 1.5);
                background: #f1f1f1;
                border-radius: 5px;
                overflow: hidden;
            
                &:not(:first-child) {
                    margin-left: 1em;
                }

                @media (max-width: 400px) {
                    --w: 300px
                }

                img {
                    pointer-events: none;
                    width: 100%;
                    height: auto;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        
        .carrouselBTN {
            display: block;
            position: absolute;
            left: 15px;
            top: 50%;
            
            translate: 0 -50%;
            rotate: 45deg;
            width: 20px;
            aspect-ratio: 1 / 1;
            cursor: pointer;
            border-left: 3px solid rgba(0, 0, 0, .6);
            border-bottom: 3px solid rgba(0, 0, 0, .6);
            transition: var(--transIn);

            &:hover {
                transition: var(--transOut);
                border-color: var(--firstColor);
            }

            &.next {
                left: auto;
                right: 15px;
                scale: -1;     
            }
        }
    }

    #bottomTransition {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: translateY(-100%);
    }

    h2 {
        text-align: center;
    }
</style>