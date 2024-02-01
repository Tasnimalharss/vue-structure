import PROJECT from "../../apis/project";

export const state = {
    projectList: [],
    project:null,
    projectStatisticsList: [],
};

export const mutations = {
    SET_PROJECT_LIST(state, data) {
        state.projectList = data
    },
    SET_PROJECT(state, data) {
        state.project = data
    },
    SET_PROJECT_STATISTICS_LIST(state, data) {
        state.projectStatisticsList = data
    },
};

export const actions = {
    async getProjects({commit }) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await PROJECT.getProjects().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_PROJECT_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },

    async getProjectById({commit}, id) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await PROJECT.getProjectById(id).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_PROJECT', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },

    async getAllProjectIssueStatistics({commit }) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await PROJECT.getAllProjectIssueStatistics().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_PROJECT_STATISTICS_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },
};

export const getters = {
    projectList: (state) => {
        return state.projectList
    },
    project: (state) => {
        return state.project
    },
    projectStatisticsList: (state) => {
        return state.projectStatisticsList
    },
};