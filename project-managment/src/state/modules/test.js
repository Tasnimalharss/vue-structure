import TEST from "@/apis/test";

export const state = {
    weatherList: [],
};

export const mutations = {
    SET_WAETHER_LIST(state, data) {
        state.weatherList = data
    }
};

export const actions = {
    async getWeatherList({commit }) {
        console.log("hi")
        await TEST.getWeatherList().then(response => {
            commit('SET_WAETHER_LIST', response.data)
            console.log(response)
        })
    },
};

export const getters = {
    weatherList: (state) => {
        return state.weatherList
    },
};