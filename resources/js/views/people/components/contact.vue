<template>

    <div class="PersonView PersonViewContact Container">

        <code>people/components/contact.vue</code>

        <div class="PersonView__con" v-if="contact">

            <p class="PersonViewContact__item" v-for="(key, index) in contactKeys">
                <strong>{{ key }}</strong>
                <span>{{ contact[key] }}</span>
            </p>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                contact: 'people/getPersonContact'
            }),
            contactKeys() {
                return Object.keys(this.contact)
            }
        }
    }
</script>
