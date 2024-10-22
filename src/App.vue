<template>
    <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap");
* {
    direction: rtl !important;
    letter-spacing: 0 !important;
    transition-timing-function: 0.3s;
}
body {
    direction: rtl;
    font-family: "Cairo", sans-serif;
    font-variation-settings: "slnt" 0;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
:root {
    --main-color: #336699;
    --secound-color: #eee;
    --therd-color: #7a7a7a;
    --pink-color: #d8588c;
}
.v-overlay__scrim {
    background: rgb(0 0 0 / 36%) !important;
}

.v-container,
.container {
    width: 90% !important;
    max-width: 90% !important;
    margin: 0 auto;
    & > div {
        flex-grow: 1;
    }
}

a {
    color: var(--main-color);
    font-weight: bold;
}
</style>
