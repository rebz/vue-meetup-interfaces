<template>

    <aside class="PeopleIndexSidebar Container">

        <code>people/components/sidebar-index.vue</code>

        <div class="PeopleIndexSidebar__con">

            <div>
                <label>Search</label>
                <input type="text" v-model="filters.search" />
            </div>

            <div>
                <p>
                    <strong>Gender: </strong>
                    <label>
                        All
                        <input type="radio" name="gender" value="both" v-model="filters.gender" />
                    </label>
                    <label>
                        Male
                        <input type="radio" name="gender" value="male" v-model="filters.gender" />
                    </label>
                    <label>
                        Female
                        <input type="radio" name="gender" value="female" v-model="filters.gender" />
                    </label>
                </p>
            </div>

        </div>

    </aside>

</template>

<script>
    export default {

        data() {
            return {
                filters: {
                    search: null,
                    gender: 'both'
                }
            }
        },

        watch: {
            filters: {
                deep: true,
                handler: function(val) {
                    this.$store.dispatch('people/setFilters', val)
                }
            }
        }
    }
</script>
