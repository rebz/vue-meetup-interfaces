<template>

    <nav>

        <router-link :to="{name: 'people'}" exact>
            List
        </router-link>

        <router-link :to="{name: 'people-create'}">
            Create
        </router-link>

    </nav>

</template>

<script>
    export default {}
</script>
