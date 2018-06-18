import Vuex from 'vuex'
import { default as modules } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: modules
})
