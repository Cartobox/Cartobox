<template>
    <section>
        <div id="wave">
            <img src="@/assets/wave4.svg" alt="Section separator" />
        </div>
        <h2>O nosso compromisso com o ambiente</h2>
        <div id="certificados">
            <div class="logo-container">
                <div class="logo-wrapper">
                    <img style="max-width: 150px" src="@/assets/FSC_Logo.svg" alt="FSC Logo" />
                    <img src="@/assets/pontoVerde.svg" alt="Logo ponto verde" />
                </div>
            </div>
            <div class="download-wrapper">
                <div class="item" @click="openCert('https://drive.google.com/file/d/1QZhiz0r2QveKYCvh_ecBz3qcUL8TDDU7/view?usp=sharing')">
                    <span>Política da Cadeia<br />de Responsabilidade</span>
                    <img src="@/assets/icons/download.svg" alt="downlaod politica da cadeia de responsabilidade" />
                </div>
                <div class="item" @click="openCert('https://drive.google.com/file/d/1fkWGf6nxLpBxj3_p6R42-iu7kyYedbOH/view?usp=sharing')">
                    <span>Certificado<br />ponto verde</span>
                    <img src="@/assets/icons/download.svg" alt="downlaod certificado ponto verde" />
                </div>
                <div class="item" @click="openCert('https://drive.google.com/file/d/1qGxuWvxmt-UfFShlX9YLP-m-RHUn8RW9/view?usp=sharing')">
                    <span>Declaração<br />pegada de carbono evitada</span>
                    <img src="@/assets/icons/download.svg" alt="downlaod Declaração de pegada de carbono evitada" />
                </div>
            </div>
        </div>
        <p>
            A Cartobox tem o compromisso em implementar e manter a Gestão da Cadeia de Responsabilidade de acordo com os requisitos das normas do
            FSC®, através da escolha e utilização de produtos certificados FSC na produção de alguns dos produtos que comercializa. Consulte-nos para
            obter o vosso produto FSC.
        </p>
        <p>
            Estamos comprometidos em promover a sustentabilidade e a responsabilidade ambiental. Utilizamos materiais recicláveis e biodegradáveis nos
            nossos processos de produção, procurando minimizar o nosso impacto no meio ambiente. As nossas soluções de embalagem são projetadas para
            otimizar o uso de recursos, reduzir desperdícios e promover práticas de embalagem mais ecológicas.
        </p>
        <p>
            Além disso, promovemos a consciência ambiental entre os nossos colaboradores, incentivando práticas de conservação de recursos e separação
            adequada de resíduos. Também colaboramos com fornecedores comprometidos com práticas sustentáveis, em busca de estabelecer parcerias que
            promovem a responsabilidade ambiental em toda a cadeia produtiva.
        </p>
        <p>
            Acreditamos que a sustentabilidade vai além da escolha de materiais e processos eco-friendly. Para isso, trabalhamos em conjunto com os
            nossos clientes para desenvolver embalagens personalizadas que atendam aos requisitos de proteção do produto, ao mesmo tempo em que
            priorizam a sustentabilidade.
        </p>

        <div id="sep"><span></span></div>
    </section>
</template>

<script setup lang="ts">
function openCert(link: string) {
    window.open(link, "_blank");
}
</script>

<style scoped lang="scss">
#certificados {
    padding-top: 3em;
    padding-bottom: 0em;

    img {
        display: block;
        max-width: 200px;
        margin-inline: auto;
        padding-bottom: 2em;
    }
    .logo-wrapper {
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 2em;
        }
    }
    .download-wrapper {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 2em;
        }

        .item {
            display: flex;
            flex-direction: column;
            justify-content: center;

            span {
                text-align: center;
                cursor: pointer;
                transition: var(--transIn);

                &:hover {
                    transition: var(--transOut);
                    color: #d8d8d8;
                }
            }

            img {
                max-width: 40px;
                filter: invert(1);
                padding-top: 2em;
                cursor: pointer;
            }
        }
    }
}

#sep {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(2em);
    width: 100%;
    height: 4em;
    overflow: hidden;

    span {
        display: block;
        position: absolute;
        width: 90%;
        height: 50px;
        background: rgb(255, 255, 255);
        bottom: 0;
        left: 50%;
        transform-origin: center;
        transform: translateY(20%) translateX(-50%) scaleX(500%) rotate(5deg);
    }
}

#wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    img {
        display: block;
        width: 100%;
        transform: translateY(-50%);
    }
}

section {
    min-height: 100px;
    padding-bottom: 9em;
    background: var(--secondColor);
    padding-top: 3em;

    background: linear-gradient(0deg, rgba(0, 99, 155, 0.76), rgba(0, 99, 155, 0.76)), url("@/assets/ocean_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    color: #fff;
}

h2 {
    text-align: center;
    color: #fff;
}

p {
    margin-top: 2em;
}
</style>
