<template>
    <section>
    
        <h2>O que precisas de saber sobre o cartão canelado</h2>
        <!--<p>O papel conhecido como cartão canelado é um tipo mais espesso e resistente, que é comumente utilizado na conceção de caixas, podendo ter uma superfície lisa ou ondulada. Este material é produzido a partir de fibras de celulose, que podem ser virgens ou recicladas.</p>
        <p>Devido à sua natureza reciclável, o cartão canelado e os seus produtos derivados frequentemente passam por processos de reciclagem, que envolvem toda uma indústria, desde a coleta até a logística e o reprocessamento nas indústrias de produção de papel e cartão.</p>
        <p>Embora tenha sido criado na Inglaterra em 1856, inicialmente como revestimento para cartolas altas, o cartão canelado só foi patenteado e utilizado como material de transporte em 20 de dezembro de 1871.</p>
        -->

        <p>O cartão canelado é composto pela junção de folhas de papel planas com folhas de papel ondulado (caneluras que se colocam na parte interior).</p>
        <img src="@/assets/cartaoCanProcess.svg" alt="Constituição do papel canelado" id="cc">
        <p>De camada simples, dupla ou tripla, são várias as combinações de papel que podem ser utilizadas na produção do cartão canelado que resultam em várias variantes com diferentes graus de flexibilidade e resistência tornando-o um material de eleição quando o objetivo é proteção, transporte ou promoção de produtos.</p>
        <p>Feito a partir de fontes naturais e renováveis, o cartão canelado é um aliado contra a devastação florestal. Tem um dos melhores índices de recuperação e reciclagem comparado com qualquer outro tipo de material de embalagens.</p>
        <p></p>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    #cc {
        display: block;
        margin-inline: auto;
        width: 70%;
        margin-top: 5em;

        @media (max-width: 800px) {
            width: 100%;
        }
    }

    section {
        background: linear-gradient(0deg, #00629bd6, var(--secondColor)), 
        url("@/assets/bg1.jpg");
        background-position: center;
        background-size: cover;
        padding-bottom: 5em;
        background-attachment: fixed;
    }

    #topTransition {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: var(--secondColor);
        background: linear-gradient(180deg, var(--secondColor) 50%, rgba(0, 163, 212, 0) 71.32%);
    }

    

    h2 {
        text-align: center;
        color: #fff;
        padding-top: 1em;
    }

    p {
        color: #fff;
        display: block;
        margin-inline: auto;
        font-weight: 400;
        margin-top: 3em;
        line-height: 1.5;
        font-size: 1.3em;

        @media (max-width: 800px) {
            margin-top: 2em;
        }
    }
</style>