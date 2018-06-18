<template>

    <div class="CoreSubNavigation Container" v-if="hasSubNav">

        <code>views/layouts/core/CoreSubNavigation.vue</code>

        <div class="CoreSubNavigation__con">

            <router-view name="subnav" class="SubNavigation"></router-view>

        </div>

    </div>

</template>

<script>
    export default {
        computed: {
            hasSubNav() {
                // the second match item of any route will be the top level layout for that route
                // the first match is '/', the home route, which is Core.vue
                return (this.$route.matched[1].components && this.$route.matched[1].components.subnav) ? true: false
            }
        }
    }
</script>
