<template>

    <div class="People Container">

        <code>people/layouts/layout.vue</code>

        <div class="People__con">

            <router-view name="sidebar" class="Sidebar"></router-view>

            <router-view></router-view>

        </div>

    </div>

</template>

<script>
    export default {

        mounted() {
            this.fetchData()
        },

        methods: {

            fetchData() {
                this.$store.dispatch('people/getAll')
            }
        }

    }
</script>
