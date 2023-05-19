<script setup lang="ts">

</script>
<template>
  <div id="container">
    <img src="@/static/logo-white.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
  #container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #018bb5;
    justify-content: center;
    align-items: center;
    color: #fff;

    background-image: url("@/static/bg.png");
    background-position: center;
    background-size: cover;
    background-blend-mode: color-burn;
  }

  h1 {
    font-size: 70px;
  }

  img {
    display: block;
    width: 50%;
  }
</style>