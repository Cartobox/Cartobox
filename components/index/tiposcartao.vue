<template>
    <section>
        <h2>Os tipos de cartão que utilizamos</h2>
        <div id="tiposcartao" class="noSelect">
            <div class="item">
                <div class="hover-area"></div>
                <div class="wrapper">
                    <div class="nome">Cartão canelado micro</div>
                    <p>composto por três folhas de papel (1 canelura + 2 folhas planas), cerca de 2mm de espessura. Indicado para caixas de pequena dimensão.</p>
                </div>
            </div>

            <div class="item">
                <div class="hover-area"></div>
                <div class="wrapper">
                    <div class="nome">Cartão canelado fino</div>
                    <p>composto por três folhas de papel (1 canelura + 2 folhas planas), cerca de 3mm de espessura. Apropriado para caixas de arrumação, embalamento e transporte.</p>
                </div>
            </div>

            <div class="item">
                <div class="hover-area"></div>
                <div class="wrapper">
                    <div class="nome">Cartão canelado largo</div>
                    <p>composto por três folhas de papel (1 canelura + 2 folhas planas) , cerca de 4mm de espessura. Ideal para caixas de embalamento e transporte.</p>
                </div>
            </div>

            <div class="item">
                <div class="hover-area"></div>
                <div class="wrapper">
                    <div class="nome">Cartão canelado duplo</div>
                    <p>composto por cinco folhas de papel (2 caneluras + 3 folhas planas) , cerca de 6mm de espessura. Adequado para produtos mais pesados, devido à maior robustez e estabilidade do cartão.</p>
                </div>
            </div>

            <div class="item">
                <div class="hover-area"></div>
                <div class="wrapper">
                    <div class="nome">Cartão canelado duplo micro</div>
                    <p>composto por cinco folhas de papel (2 caneluras + 3 folhas planas) , cerca de 4mm de espessura. Distingue-se do cartão canelado duplo por possuir um dos ondulados micro, conferindo maior resistência à parede do cartão, o que possibilita impressões de maior qualidade.</p>
                </div>
            </div>


        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    section {
        min-height: 400px;
        background: var(--firstColor);
        background: #fff;
        color: var(--firstColor);
        text-align: center;
    }

    #tiposcartao {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-top: 4em;
        margin-bottom: 3em;

        --H: 280px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
            --H: 110px;
        }

        .item {
            --opacity: .3;
            --BGC: rgba(0, 163, 212, var(--opacity));
            transition: .14s;

            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            min-height: var(--H);

            &:nth-child(2) {
                --BGC: rgba(37, 134, 174, var(--opacity));
            }

            &:nth-child(3) {
                --BGC: rgba(0, 84, 120, var(--opacity));
            }

            &:nth-child(4) {
                --BGC: rgba(117, 212, 252, var(--opacity));
            }

            &:nth-child(5) {
                --BGC: rgba(117, 188, 218, var(--opacity));
            }

            
            .hover-area {
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 4;
            }
            .wrapper {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                transition: .2s;
                overflow: hidden;

                &::before {
                    transition: .2s;
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    content: '';
                    background: 
                        linear-gradient(0deg, var(--BGC), var(--BGC)),
                        url("@/assets/cartao\ canelado\ micro.png");
                    background-size: cover;
                    background-position: center;
                }

                .nome {
                position: absolute;
                top: 15%;
                left: 0;
                padding-inline: 1em;
                padding-block: .7em;
                padding-right: 2em;
                background: #fff;
                background: linear-gradient(90deg, rgba(255, 255, 255, 0.65) 90.5%, rgba(255, 255, 255, 0) 96.1%);
                color: #000;
                }
                
                p {
                    display: block;
                    position: absolute;
                    top: 40%;
                    color: #fff;
                    text-align: left;
                    padding-inline: 1em;
                    opacity: 0;
                    transition: .2s;
                }
            }

            &:nth-child(1) {
                .wrapper {
                    right: auto;
                    left: 0;
                }
            }

            
        }
    }

    @media (min-width: 980px) {
        .hover-area:hover ~ .wrapper{
            width: 200% !important;
            z-index: 3;
            transition: .08s;
        }
    }

    @media (max-width: 979px) {
        .item:hover{
            --H: 250px;
        }
    }
    
    .item:hover {
        --opacity: .45 !important;
        --BGC: rgba(0, 163, 212, var(--opacity)) !important;
        p {
            opacity: 1 !important;
        }
    }
</style>