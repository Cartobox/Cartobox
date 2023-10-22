<template>
    <section>
        <img src="@/assets/logos_pt_2020.png" alt="Logos de fundos comunitários europeus, portugal 2020">
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    section {
        min-height: 50px;
        display: flex;
        width: 100%;
        background: #fff;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            height: 100%;
            width: auto;
            max-height: 120px;

            @media (max-width: 800px) {
                width: 100%;
                height: auto;
                max-height: auto;
            }
        }
    }
</style>