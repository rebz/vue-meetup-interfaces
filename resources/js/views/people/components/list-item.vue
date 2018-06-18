<template>

    <router-link class="ListItem" :to="{ name: 'person', params: {username: username} }">

        <span class="ProfilePhoto ProfilePhoto--small">
            <img :src="image" />
        </span>

        <div class="ListItem__con">

            <span class="ListItem__title">
                {{ name }}
            </span>

            <span class="ListItem__subtitle">
                {{ email }}
            </span>

        </div>

    </router-link>

</template>

<script>
    export default {

        props: ['person'],

        computed: {
            email() {
                return this.person ? this.person.email : null
            },
            username() {
                return this.person ? this.person.login.username : null
            },
            image() {
                return this.person ? this.person.picture.large : null
            },
            name() {
                return this.person ? this.person.name.first + ' ' + this.person.name.last : null
            }
        }

    }
</script>