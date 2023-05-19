<template>
    <div>
        <section id="title">
            <h2>Termos e condições</h2>
        </section>
        <section>
            <p>Um cookie é um pequeno ficheiro informativo que é instalado no browser do leitor e armazenado no respectivo computador quando visita um site. São utilizados cookies, por regra, para melhorar a experiência do utilizador do site e o seu desempenho.</p>    
            <p>A Cartobox utiliza cookies para recolher e guardar informação no âmbito da utilização do seu site. A cada visitante do site corresponde um cookie individual, garantindo desta forma a privacidade e a segurança dos dados. Os cookies são apenas utilizados pela Cartobox e a sua utilização limita-se aos seguintes fins:</p>
            <p>Permitir à Cartobox saber quem é o visitante do seu website, armazenando os detalhes de acesso a www.cartobox.pt e preferência do visitante, e, dessa forma, prestar um serviço melhor, mais seguro e personalizado.</p>
            <p>Os diferentes browsers (navegadores) permitem visualizar os cookies que existem no seu equipamento e inibir ou apagar, individual ou totalmente, os cookies.</p>
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

    defineOgImageStatic({
        component: 'MyOgImage',
        width: 1200,
        height: 630
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