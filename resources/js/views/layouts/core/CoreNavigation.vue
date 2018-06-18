<template>

    <div class="CoreNavigation Container">

        <code>views/layouts/core/CoreNavigation.vue</code>

        <div class="CoreNavigation__con">

            <div class="CoreNavigation__actions">

                <button @click="navBackward">
                    <i class="fa fa-caret-left"></i>
                    <span>Back</span>
                </button>

                <button>
                    <i class="fa fa-cogs"></i>
                </button>

                <button @click="navForward">
                    <span>Forward</span>
                    <i class="fa fa-caret-right"></i>
                </button>

            </div>

            <navigation class="CoreNavigation__nav"></navigation>

        </div>

    </div>

</template>

<script>

    import Navigation from '../../../components/Navigation'

    export default {

        components: {
            Navigation
        },

        methods: {

            navBackward() {
                this.$router.go(-1)
            },

            navForward() {
                this.$router.go(1)
            }

        }
    }
</script>