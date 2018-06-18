import PeopleLayout from "./layouts/layout"
import PeopleLayoutNav from "./layouts/layout-nav"

import PeopleIndex from "./index"
import PeopleIndexSidebar from "./components/sidebar-index"
import PeopleCreate from "./create"
import PeopleEdit from "./edit"

import PersonLayout from "./layouts/person"
import PersonView from "./view.vue"
import PersonViewAddress from "./components/address.vue"
import PersonViewContact from "./components/contact.vue"
import PersonViewSidebar from "./components/sidebar-view"

export default [
    {
        path: "people",
        components: {
            default: PeopleLayout,
            subnav: PeopleLayoutNav
        },
        children: [
            {
                path: "",
                name: "people",
                components: {
                    default: PeopleIndex,
                    sidebar: PeopleIndexSidebar
                }
            },
            {
                path: "create",
                name: "people-create",
                components: {
                    default: PeopleCreate
                }
            },
            {
                path: ":username",
                components: {
                    default: PersonLayout,
                },
                children: [
                    {
                        path: "",
                        name: "person",
                        components: {
                            default: PersonView,
                            sidebar: PersonViewSidebar
                        }
                    },
                    {
                        path: "address",
                        name: "person-address",
                        components: {
                            default: PersonViewAddress,
                            sidebar: PersonViewSidebar
                        }
                    },
                    {
                        path: "contact",
                        name: "person-contact",
                        components: {
                            default: PersonViewContact,
                            sidebar: PersonViewSidebar
                        }
                    }
                ]
            },
        ]
    }
]