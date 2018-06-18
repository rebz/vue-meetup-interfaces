<template>

    <div class="Navigation Container">

        <code>components/Navigation.vue</code>

        <nav class="Navigation__con">

            <router-link :to="{ name: 'dashboard' }" exact>Dashboard</router-link>

            <router-link :to="{ name: 'page' }">Page</router-link>

            <router-link :to="{ name: 'people' }">People</router-link>

            <router-link :to="{ name: 'contact' }">Contact</router-link>

        </nav>

    </div>

</template>

<script>
    export default {
    }
</script>
