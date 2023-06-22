<template>
    <section>
        <div class="text-section">
            <h2>Quem são os nossos clientes?</h2>
            <p>Com uma história sólida e uma reputação inabalável, construímos a nossa empresa com base em valores fundamentais de excelência, inovação e compromisso com a satisfação do cliente. Desde o nosso início, temos sido impulsionados por uma visão clara de sermos uma referência no mercado de caixas de cartão, oferecendo produtos que superam as expectativas dos nossos clientes.</p>
            <p>Temos clientes nas mais variadas indústrias cujas necessidades diferem grandemente, pelo que nos comprometemos a fazer a embalagem perfeita que enquadre as suas necessidades para que possam realizar as suas atividades sem se preocuparem com a qualidade de acondicionamento dos seus produtos, seja no transporte ou no armazenamento.</p>
            <p>Alguns dos nossos clientes estão presentes nas indústrias do vidro, vinhos, cerâmica, alimentar, plástico, e-commerce, etc...</p>
        </div>
        <div id="img">
            <img src="@/assets/girl-holding-boxes.png" alt="Girl holding boxes">
        </div>
        
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang=scss>
    

    section {
        padding-block: var(--padding);
        display: grid;
        flex-direction: row;
        grid-template-columns: 4fr 4fr;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }

    #img {
        @media (max-width: 900px) {
            display: none;
        }
        
    
    }

    #img img {
        position: absolute;
        display: block;
        width: auto;
        height: 100%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(6%) scale(120%);
    }

    p {
        margin-top: 2em;
    }
</style>