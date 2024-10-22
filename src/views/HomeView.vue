<template>
    <div>
        <Photo_Gallery />
    </div>
</template>

<script>
import Photo_Gallery from "./Photo_Gallery.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        Photo_Gallery,
    },
});
</script>
<style lang="scss" scoped>
body {
    overflow: hidden;
}
</style>
