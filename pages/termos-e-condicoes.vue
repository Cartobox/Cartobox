<template>
    <div>
        <section id="title">
            <h2>Termos e condições</h2>
        </section>
        <section>
            <p>A Cartobox é uma empresa especializada na produção de embalagens em cartão canelado. </p>
            <p>A Cartobox reserva-se ao direito de interromper o acesso ao site por qualquer período que considerarmos necessário, seja por razões técnicas, administrativas, de força maior ou outras que possam surgir e não estejam contempladas aqui. </p>
            <p>Para mais informações, consulte nossa política de privacidade e a nossa política de utilização de cookies. Se tiver dúvidas sobre os nossos termos e condições de uso, entre em contato conosco pelo endereço:</p>
            <p>Rua da Forcada, S/N, Calços 2445-712 Martingança</p>
            <p>ou por e-mail em </p>
            <p>comercial@cartobox.pt</p>
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