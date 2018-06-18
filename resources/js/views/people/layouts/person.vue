<template>

    <div class="Person Container">

        <code>people/layouts/person.vue</code>

        <div class="Person__navigate">

            <button @click="goToPersonByIndex(prevPersonUsername)" :disabled="!prevPersonUsername ? 'disabled' : false">
                <i class="far fa-caret-square-left"></i>
                Prev
            </button>

            <button @click="goToPersonByIndex(nextPersonUsername)" :disabled="!nextPersonUsername ? 'disabled' : false">
                Next
                <i class="far fa-caret-square-right"></i>
            </button>

        </div>

        <div class="Person__con">

            <router-view name="sidebar"></router-view>

            <router-view></router-view>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        mounted() {
            window.addEventListener('keyup', this.keyHandler)
        },
        beforeDestroy() {
            window.removeEventListener('keyup', this.keyHandler)
        },

        watch: {

            '$route': {
                immediate: true,
                handler: function(val) {
                    this.fetchPerson()
                },
            },

            people: {
                handler: function() {
                    if (this.people.length) {
                        this.fetchPerson()
                    }
                }
            },
        },

        methods: {

            keyHandler(event) {

                // console.info('event.keyCode = ' + event.keyCode)

                // left arrow
                if (event.keyCode == 37) {
                    this.goToPersonByIndex(this.prevPersonUsername)
                }

                // right arrow
                if (event.keyCode == 39) {
                    this.goToPersonByIndex(this.nextPersonUsername)
                }
            },

            fetchPerson() {
                this.$store.dispatch('people/getPerson', this.$route.params.username)
            },

            goToPersonByIndex(username) {
                if (username) {
                    this.$router.push({ name: this.$route.name, params: { username: username }})
                }
            }

        },

        computed: {
            ...mapGetters({
                people: 'people/getPeople',
                index: 'people/getPersonIndex'
            }),
            prevPersonUsername() {
                return this.index ? (this.people[(this.index - 1)] ? this.people[(this.index - 1)].login.username : null) : null
            },
            nextPersonUsername() {
                return (this.people.length - 1) > this.index ? (this.people[(this.index + 1)] ? this.people[(this.index + 1)].login.username : null) : null
            }
        }

    }
</script>
