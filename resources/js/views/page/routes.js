import PageLayout from "./layout.vue"
import PageIndex from "./index.vue"

export default [
    {
        path: "page",
        components: {
            default: PageLayout
        },
        children: [
            {
                path: "",
                name: "page",
                components: {
                    default: PageIndex
                }
            }
        ]
    }
]