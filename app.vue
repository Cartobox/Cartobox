<template>
  <div>
    <NavNavbar></NavNavbar>
    <NuxtPage></NuxtPage>
    <NavFooter></NavFooter>


    <Contac></Contac>
  </div>
</template>

<script setup lang="ts">
  import '@formkit/themes/genesis'
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url("@/themes/theme.css");

  :root {
    --padding: 4em;
    --paddingTop: 1em;

    --firstColor: #00A3D4;
    --secondColor: #00639B;

    --transIn: .2s;
    --transOut: .12s;

    ///Nav
    --navH: 90px;

    @media (max-width: 600px) {
      --padding: 2em;
    }

    @media (max-width: 380px) {
      --padding: 1em;
    }
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    font-family: 'Roboto', sans-serif;

  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }

  section {
    display: block;
    padding-inline: var(--padding);
    padding-top: var(--paddingTop);
    padding-bottom: var(--paddingTop);

    min-height: max(450px, calc(100vh - var(--navH)));
  }

  h1 {
    font-weight: 500;
    font-size: 4.7em;
    color: #00639B;
  }

  h2 {
    font-weight: 500;
    font-size: 2.7em;
    color: #00639B;
  }

  h4 {
    font-weight: 300;
    font-size: 2em;

  }

</style>
