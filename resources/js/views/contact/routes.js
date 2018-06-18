import ContactLayout from "./layout.vue"
import ContactIndex from "./index.vue"

export default [
    {
        path: "contact",
        components: {
            default: ContactLayout
        },
        children: [
            {
                path: "",
                name: "contact",
                components: {
                    default: ContactIndex
                }
            }
        ]
    }
]