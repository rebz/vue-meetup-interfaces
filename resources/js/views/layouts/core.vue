<template>

    <div class="Core Container">

        <code>views/layouts/core.vue</code>

        <div class="Core__con">

            <core-header></core-header>

            <core-body></core-body>

        </div>

    </div>

</template>

<script>
    import CoreHeader from './core/CoreHeader.vue'
    import CoreBody from './core/CoreBody.vue'

    export default {
        components: {
            CoreHeader,
            CoreBody
        }
    }
</script>
