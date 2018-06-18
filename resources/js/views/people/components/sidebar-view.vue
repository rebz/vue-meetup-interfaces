<template>

    <aside class="PersonSidebar Container">

        <code>people/sidebar-view.vue</code>

        <div class="PersonSidebar__con">

            <div class="PersonSidebar__details">

                <div class="ProfilePhoto ProfilePhoto--large">
                    <img :src="image" />
                </div>

                <span>{{ name }}</span>

            </div>

            <nav>

                <router-link :to="{name: 'person'}" exact>
                    Basics
                </router-link>

                <router-link :to="{name: 'person-address'}">
                    Address
                </router-link>

                <router-link :to="{name: 'person-contact'}">
                    Contact
                </router-link>

            </nav>

        </div>

    </aside>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                name:  'people/getPersonName',
                image: 'people/getPersonImage'
            }),
        }

    }
</script>
