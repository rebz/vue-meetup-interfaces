<template>

    <div class="CoreBody Container">

        <code>views/layouts/core/CoreBody.vue</code>

        <div class="CoreBody__con">

            <transition :name="transitionName">

                <router-view class="Container"></router-view>
w
            </transition>

        </div>

    </div>

</template>

<script>
    export default {

        data() {
            return {
                transitionName: null
            }
        },

        methods: {

            getRouteIndex(string) {
                return this.$router.options.routes[0].children.findIndex(route => route.path == string)
            }

        },

        watch: {

            '$route'(to, from) {
                const toDepth = this.getRouteIndex(to.path.split('/').filter(v => v != '')[0])
                const fromDepth = this.getRouteIndex(from.path.split('/').filter(v => v != '')[0])
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }

    }
</script>
