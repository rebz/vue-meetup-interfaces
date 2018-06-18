export const getPeople = state => {
    return state.people
}

export const getPersonName = state => {
    return state.person ? `${state.person.name.first} ${state.person.name.last}` : null
}

export const getPersonIndex = state => {
    return state.person_index ? state.person_index : null
}

export const getPersonImage = state => {
    return state.person ? state.person.picture.large : null
}

export const getPersonLocation = state => {
    return state.person ? state.person.location : null
}

export const getPersonBasics = state => {

    let data = state.person ? state.person : null

    if (data) {

        let basics = {
            registered: data.registered,
            dob: data.dob,
            title: data.name.title,
            first: data.name.first,
            last: data.name.last,
            gender: data.gender,
        }

        return basics
    }

    return null
}

export const getPersonContact = state => {

    let data = state.person ? state.person : null

    if (data) {

        let contact = {
            email: data.email,
            username: data.login.username,
            cell: data.cell,
            phone: data.phone
        }

        return contact
    }

    return null
}

export const getFilters = state => {
    return state.filters ? state.filters : null
}
