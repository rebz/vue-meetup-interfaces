<template>

    <div class="PersonView Container">

        <code>people/view.vue</code>

        <div class="PersonView__con" v-if="basics">

            <p class="PersonViewContact__item" v-for="(key, index) in basicsKeys">
                <strong>{{ key }}</strong>
                <span>{{ basics[key] }}</span>
            </p>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                basics: 'people/getPersonBasics'
            }),
            basicsKeys() {
                return Object.keys(this.basics)
            }
        }
    }
</script>
