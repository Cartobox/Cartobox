<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .btn {
        display: block;
        margin-top: auto;
        margin-bottom: 2em;
        font-size: 1.8rem;
        cursor: pointer;
        width: max-content;
        background: #00A3D4;
        color: #fff;
        padding-inline: .5em;
        padding-block: .2em;
        border-radius: .2em;
        max-width: 100%;
        text-align: center;

        transition: var(--transIn);

        &:hover {
            transition: var(--transOut);
            background: var(--secondColor);
        }

        @media (max-width: 650px) {
            margin-inline: auto;
            
        }
    }
</style>