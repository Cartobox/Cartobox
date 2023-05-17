<template>
    <div>
        <section id="title">
            <h2>Termos e condições</h2>
        </section>
        <section>
            <p>Compromisso com a Privacidade e a Proteção de Dados Pessoais </p>
            <p>A Cartobox - responsável pelos serviços disponibilizados no seu site está empenhada e comprometida no cumprimento da legislação de proteção de dados pessoais, da privacidade e a segurança de informação. </p>
            <p>O site da Cartobox pode também incluir ligações para outros sites cujas práticas de privacidade sejam diferentes das nossas. </p>
            <p>Se submeter os seus dados pessoais a qualquer um desses sites, o seus dados pessoais serão geridos pelas políticas de privacidade desses sites.</p>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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

    p {
        text-align: center;
        font-size: 1.6em;
        font-weight: 300;

        &:not(:first-child) {
            margin-top: 2em;
        }
    }
</style>