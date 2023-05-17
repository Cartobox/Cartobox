<template>
    <div>
        <section>
            <h2>Encontre-nos</h2>
            <img src="@/assets/map.svg" alt="" @click="showMapEl" v-show="!showMap">
        </section>
        <div id="map" ref="mapEl" :class="{hideMap: !showMap}">
            <div id="blend"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // @ts-ignore
    function addMarkersToMap(map: any) {
        // @ts-ignore
        var parisMarker = new H.map.Marker({lat:39.68459645685661, lng:-8.972051690212194});
        map.addObject(parisMarker);

    }
    const mapEl = ref(null)
        

    let map: any = null;

    onMounted(() => {
        setTimeout(() => {
            console.log("loaded map")
            useHead({
                script: [
                    {src: "https://js.api.here.com/v3/3.1/mapsjs-core.js"},
                    {src: "https://js.api.here.com/v3/3.1/mapsjs-service.js"},
                    {src: "https://js.api.here.com/v3/3.1/mapsjs-ui.js"},
                    {src: "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"}
                ],
                link: [
                    { rel: 'stylesheet', href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css' },
                ]
            });
        
            setTimeout(() => {
                // @ts-ignore
                var platform = new H.service.Platform({
                apikey: "ae9oWQ89WX8cjdDfPY7edcK8mxsdbjX2Eo4rbHS4A4s"
                });
                var defaultLayers = platform.createDefaultLayers();

                //Step 2: initialize a map - this map is centered over Europe
                // @ts-ignore
                map = new H.Map(mapEl.value,
                defaultLayers.vector.normal.map,{
                center: {lat:39.68459645685661, lng:-8.972051690212194},
                zoom: 9,
                pixelRatio: window.devicePixelRatio || 1
                });
                // add a resize listener to make sure that the map occupies the whole container
                window.addEventListener('resize', () => map.getViewPort().resize());

                //Step 3: make the map interactive
                // MapEvents enables the event system
                // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
                // @ts-ignore
                var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

                // Create the default UI components
                // @ts-ignore
                var ui = H.ui.UI.createDefault(map, defaultLayers);

                // Now use the map as required...
                addMarkersToMap(map);
            }, 2000);
        }, 500);
    })

    ///Toggle map
    const showMap = ref(false)

    const showMapEl = () => {
        showMap.value = true;
    }

</script>

<style scoped lang="scss">
    section {
        min-height: max-content;
    }

    h2 {
        text-align: center;
    }

    img {
        display: block;
        width: 80%;
        height: auto;
        margin: auto;
        margin-top: 5em;

        @media (max-width: 1000px) {
            width: 100%;
        }
    }

    #map {
        display: block;
        width: 100%;
        height: 700px;
        position: relative;

        &.hideMap {
            opacity: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
        }

        #blend {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: rgb(255,255,255);
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
        }
    }
</style>