export const getAll = ({ commit }) => {

    // api request to get list of random users
    axios.get('https://randomuser.me/api/', {
        params: {
            results: 25,
            seed: 'a0d5c0760dcbbf34',
            nat: "US"
        }
    })
    .then((response) => {
        commit('SET_ALL', response.data.results)
    })
    .catch((error) => {
        console.info(error)
    })

}

export const getPerson = ({ commit, state }, username) => {

    // find person in array of people
    const person = state.people.find((person) => {
        return person.login.username == username
    })

    const index = state.people.findIndex(obj => obj == person)

    // commit mutation to set them in our store
    commit('SET_PERSON', person)
    commit('SET_PERSON_INDEX', index)
}

export const setPersonIndex = ({ commit }, index) => {
    commit('SET_PERSON_INDEX', index)
}

export const setFilters = ({ commit }, filters) => {
    commit('SET_FILTERS', filters)
}
