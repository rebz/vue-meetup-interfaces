<template>

    <div class="PeopleIndex Container">

        <code>people/index.vue</code>

        <div class="PeopleIndex__con">

            <h1>{{ people.length }} People</h1>

            <div class="PeopleIndex__list">

                <list-item v-for="(item, index) in people" :key="index" :person="item"></list-item>

            </div>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'
    import ListItem from './components/list-item'

    export default {

        components: {
            ListItem
        },

        data() {
            return {
                userKeys: ['first', 'last', 'email'],
            }
        },

        computed: {
            ...mapGetters({
                filters: 'people/getFilters'
            }),
            people() {
                let people = this.$store.state.people.people ? this.$store.state.people.people : null

                if (this.filters && this.filters.gender && this.filters.gender != 'both') {
                    people = people.filter(person => person.gender == this.filters.gender)
                }

                if (this.filters && this.filters.search) {

                    people = people.filter((object) => {

                        if (object.email.toString().toLowerCase().includes(this.filters.search.toLowerCase())) {
                            return true
                        }

                        if (object.name.first.toString().toLowerCase().includes(this.filters.search.toLowerCase())) {
                            return true
                        }

                        if (object.name.last.toString().toLowerCase().includes(this.filters.search.toLowerCase())) {
                            return true
                        }

                        if ((object.name.first + ' ' + object.name.last).toString().toLowerCase().includes(this.filters.search.toLowerCase())) {
                            return true
                        }

                    })
                }

                return people
            }
        }
    }
</script>
