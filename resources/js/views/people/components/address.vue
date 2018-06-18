<template>

    <div class="PersonView PersonViewAddress Container">

        <code>people/components/address.vue</code>

        <div class="PersonView__con" v-if="location">

            <p v-html="formatLocation"></p>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                location: 'people/getPersonLocation'
            }),
            formatLocation() {
                let loc = this.location
                return `${loc.street}<br>${loc.city}, ${loc.state}, ${loc.postcode}`
            }
        }
    }
</script>
