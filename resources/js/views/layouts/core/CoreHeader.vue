<template>

    <header class="CoreHeader Container">

        <code>views/layouts/core/CoreHeader.vue</code>

        <div class="CoreHeader__con">

            <core-navigation></core-navigation>

            <core-sub-navigation></core-sub-navigation>

        </div>

    </header>

</template>

<script>
    import CoreNavigation from './CoreNavigation.vue'
    import CoreSubNavigation from './CoreSubNavigation.vue'

    export default {
        components: {
            CoreNavigation,
            CoreSubNavigation
        }
    }
</script>
