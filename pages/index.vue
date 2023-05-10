<template>
    <div id="a">
        <img src="@/static/maintenance.png" class="imgcenter" />
        <p class="txtblue">Our website is <a class="txtyellow">going through a maintenance</a> and will be available soon.<br />We request you to visit after some time or talk to our representative at <strong class="txtwhite">(+1-404-309-1010)</strong>.</p>
        <p class="txtwhite"><strong>Thank You!</strong> for visiting.</p>
    </div>
</template>

<script setup lang="ts">
import { title } from 'process';

    useHead(
        {
            title: "This website is under maintenance ...."
        }
    )
</script>

<style scoped>
    @import url("@/static/CSS.css");
</style>