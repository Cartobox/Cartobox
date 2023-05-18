<template>
    <div>
        <section>
            <h2>Encontre-nos</h2>
            <img src="@/assets/map.svg" alt="" @click="showMapEl" v-show="!showMap">
        </section>
        <div id="map" ref="mapEl" :class="{hideMap: !showMap}">
            <img src="/map_img.png" alt="" v-show="false" ref="mapImg">
            <div id="blend"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const mapImg = ref(null);


    // @ts-ignore
    function addMarkersToMap(map: any) {
        // @ts-ignore
        var parisMarker = new H.map.Marker({lat:39.68459645685661, lng:-8.972051690212194});
        map.addObject(parisMarker);

    }

    function addOverlayToMap(map: any) {
        var imgCounter = 0;

        // create an overlay that will use a weather map as a bitmap
        // @ts-ignore
        var overlay = new H.map.Overlay(
            // @ts-ignore
            new H.geo.Rect(
                39.684364904101805, -8.972017515383158,
                39.68411391847231, -8.971576238036064
            ),

            rainRadar[imgCounter],
            {
            // the bitmap is frequently updated mark the object as volatile
            volatility: false
            }
        );

        

        // add overlay to the map
        map.addObject(overlay);
    }

    const mapEl = ref(null)
        

    let map: any = null;

    useHead(
        {
            script: [
                {src: "https://js.api.here.com/v3/3.1/mapsjs-core.js", defer: "true"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-service.js", defer: "true"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-ui.js", defer: "true"},
                {src: "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js", defer: "true"}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css' },
            ]
        }
    )

    onMounted(() => {
        
        // @ts-ignore
        let platform = new H.service.Platform({
            apikey: "ae9oWQ89WX8cjdDfPY7edcK8mxsdbjX2Eo4rbHS4A4s",
        });

        let defaultLayers = platform.createDefaultLayers();

        // @ts-ignore
        map = new H.Map(document.getElementById('map'),
            defaultLayers.vector.normal.map,{
            center: {lat:39.6845303306826, lng:-8.97210535464627},
            zoom: 14,
            pixelRatio: window.devicePixelRatio || 1
        });

        window.addEventListener('resize', () => map.getViewPort().resize());

        // @ts-ignore
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // @ts-ignore
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        var LocationOfMarker = {lat:39.6845303306826, lng:-8.97210535464627};
        // @ts-ignore
        var icon = new H.map.Icon('/marker.svg');
        // @ts-ignore
        var marker = new H.map.Marker(LocationOfMarker, { icon: icon });

        // Add the marker to the map:
        map.addObject(marker);


        rainRadar.push(mapImg.value);

        addOverlayToMap(map);
    })
    var rainRadar: any = [];

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