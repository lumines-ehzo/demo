export const state = () => ({
    user: '',
    pass: ''
})

export const getters = {
    username: (state, getters) => {
        return state.user
    }
}

export const actions = {
    setName: ({ commit, state }, payload) => {
        commit('set_user', payload.user)
        commit('set_pass', payload.pass)
    }
}

export const mutations = {
    set_user(state, payload) {
        state.user = payload
    },
    set_pass(state, payload) {
        state.pass = payload
    }
}