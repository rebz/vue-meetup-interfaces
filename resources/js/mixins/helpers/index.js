import {isMobile, bodyClass, addBodyClass, removeBodyClass, slugify} from "./interface"

/*
 Single Event HUb
 Used to communicate data between two sibling components
 Referenced in mixin below

 Example for sending data: this.eventHub.$emit('update', data)
 Example for catching data: this.eventHub.$on('update', data => {do your thing here});
 */
const eventHub = new Vue()

Vue.mixin({
    created() {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight

        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth
            this.windowHeight = window.innerHeight
        })
    },
    watch: {
        'bodyClass': function (classes) {
            document.body.className = classes
        }
    },
    data() {
        return {
            bodyClasses: [],
            windowWidth: 0,
            windowHeight: 0,
            eventHub: eventHub
        }
    },
    methods: {
        addBodyClass,
        removeBodyClass,
        slugify
    },
    computed: {
        isMobile,
        bodyClass
    },
});
